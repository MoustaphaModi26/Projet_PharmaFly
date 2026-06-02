import AsyncStorage from "@react-native-async-storage/async-storage";
import { mockUsers } from "../data/mockData";

export const login = async (email, password) => {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Email ou mot de passe incorrect");
  }

  const token = "mock-token-" + user.id;
  await AsyncStorage.setItem("token", token);
  await AsyncStorage.setItem("user", JSON.stringify(user));

  return { token, user };
};

export const register = async (nom, prenom, email, telephone, password) => {
  const exists = mockUsers.find((u) => u.email === email);
  if (exists) {
    throw new Error("Cet email est déjà utilisé");
  }

  const newUser = {
    id: mockUsers.length + 1,
    nom,
    prenom,
    email,
    password,
    telephone,
  };

  mockUsers.push(newUser);
  return { message: "Inscription réussie" };
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("user");
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem("token");
  } catch {
    return null;
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const isAuthenticated = async () => {
  const token = await getToken();
  return token !== null;
};