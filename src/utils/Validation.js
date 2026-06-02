export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateLoginForm = (email, password) => {
  const errors = {};

  if (!email.trim()) {
    errors.email = "L'email est obligatoire";
  } else if (!validateEmail(email)) {
    errors.email = "Format d'email invalide";
  }

  if (!password.trim()) {
    errors.password = "Le mot de passe est obligatoire";
  } else if (!validatePassword(password)) {
    errors.password = "Le mot de passe doit contenir au moins 6 caractères";
  }

  return errors;
};

export const validateRegisterForm = (nom, prenom, email, telephone, password, confirmPassword) => {
  const errors = {};

  if (!nom.trim()) {
    errors.nom = "Le nom est obligatoire";
  }

  if (!prenom.trim()) {
    errors.prenom = "Le prénom est obligatoire";
  }

  if (!email.trim()) {
    errors.email = "L'email est obligatoire";
  } else if (!validateEmail(email)) {
    errors.email = "Format d'email invalide";
  }

  if (!telephone.trim()) {
    errors.telephone = "Le téléphone est obligatoire";
  } else if (telephone.length < 8) {
    errors.telephone = "Numéro de téléphone invalide";
  }

  if (!password.trim()) {
    errors.password = "Le mot de passe est obligatoire";
  } else if (!validatePassword(password)) {
    errors.password = "Le mot de passe doit contenir au moins 6 caractères";
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Veuillez confirmer le mot de passe";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Les mots de passe ne correspondent pas";
  }

  return errors;
};