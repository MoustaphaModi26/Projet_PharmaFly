// Utilisateurs fictifs
export const mockUsers = [
  {
    id: 1,
    nom: "Moussa",
    prenom: "Amadou",
    email: "test@test.com",
    password: "123456",
    telephone: "699000001",
  },
];

// Pharmacies de Maroua
export const pharmacies = [
  { id: 1, nom: "Pharmacie Annexe", quartier: "Centre", telephone: "699000001", garde: true },
  { id: 2, nom: "Pharmacie Bali", quartier: "Bali", telephone: "699000002", garde: false },
  { id: 3, nom: "Pharmacie Domayo", quartier: "Domayo", telephone: "699000003", garde: true },
  { id: 4, nom: "Pharmacie Doualaré", quartier: "Doualaré", telephone: "699000004", garde: false },
  { id: 5, nom: "Pharmacie Kakataré", quartier: "Kakataré", telephone: "699000005", garde: false },
  { id: 6, nom: "Pharmacie Kongola", quartier: "Kongola", telephone: "699000006", garde: true },
  { id: 7, nom: "Pharmacie Marché Central", quartier: "Centre", telephone: "699000007", garde: false },
  { id: 8, nom: "Pharmacie Pitoare", quartier: "Pitoare", telephone: "699000008", garde: true },
  { id: 9, nom: "Pharmacie Pont Vert", quartier: "Pont Vert", telephone: "699000009", garde: false },
  { id: 10, nom: "Pharmacie Zokok", quartier: "Zokok", telephone: "699000010", garde: false },
];

// Médicaments fictifs par pharmacie
export const medicaments = [
  { id: 1, pharmacieId: 1, nom: "Paracétamol 500mg", prix: 500, stock: 100, categorie: "Antidouleur" },
  { id: 2, pharmacieId: 1, nom: "Amoxicilline 250mg", prix: 1500, stock: 50, categorie: "Antibiotique" },
  { id: 3, pharmacieId: 1, nom: "Ibuprofène 400mg", prix: 800, stock: 75, categorie: "Anti-inflammatoire" },
  { id: 4, pharmacieId: 3, nom: "Artemether 20mg", prix: 2000, stock: 30, categorie: "Antipaludéen" },
  { id: 5, pharmacieId: 3, nom: "Metformine 500mg", prix: 1200, stock: 60, categorie: "Diabète" },
  { id: 6, pharmacieId: 6, nom: "Oméprazole 20mg", prix: 1000, stock: 45, categorie: "Gastrique" },
  { id: 7, pharmacieId: 6, nom: "Quinine 300mg", prix: 1800, stock: 25, categorie: "Antipaludéen" },
  { id: 8, pharmacieId: 8, nom: "Vitamine C 500mg", prix: 600, stock: 200, categorie: "Vitamines" },
  { id: 9, pharmacieId: 8, nom: "Zinc 20mg", prix: 700, stock: 150, categorie: "Vitamines" },
];