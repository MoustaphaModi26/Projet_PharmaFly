# PharmaFly

## Description

PharmaFly est une plateforme innovante de gestion et de livraison de médicaments qui vise à améliorer l'accès aux produits pharmaceutiques grâce aux technologies numériques et à la livraison assistée par drones.

L'application permet aux patients de rechercher des médicaments, consulter les pharmacies partenaires, transmettre des ordonnances, suivre leurs commandes et recevoir leurs médicaments rapidement.

## Objectifs du projet

* Faciliter l'accès aux médicaments.
* Réduire les délais de livraison.
* Améliorer le suivi des commandes pharmaceutiques.
* Numériser les interactions entre patients et pharmacies.
* Intégrer des solutions de livraison par drone pour les zones difficiles d'accès.

## Fonctionnalités principales

### Espace Patient

* Création et gestion de compte.
* Authentification sécurisée.
* Recherche de médicaments.
* Consultation des pharmacies partenaires.
* Téléversement d'ordonnances médicales.
* Passation de commandes.
* Suivi en temps réel des livraisons.
* Historique des commandes.
* Gestion du profil utilisateur.

### Espace Pharmacien

* Gestion du catalogue de médicaments.
* Validation des ordonnances.
* Gestion des stocks.
* Traitement des commandes.
* Suivi des livraisons.

### Espace Administrateur

* Gestion des utilisateurs.
* Gestion des pharmacies.
* Gestion des médicaments.
* Supervision des livraisons.
* Tableau de bord statistique.
* Gestion des drones et des itinéraires.

## Technologies utilisées

### Frontend Mobile

* React Native
* Expo
* TypeScript
* React Navigation

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

### Outils

* Git
* GitHub
* Postman
* Visual Studio Code

## Installation

### Cloner le projet

```bash
git clone <repository-url>
```

### Frontend

```bash
cd frontend
npm install
npx expo start
```

### Backend

```bash
cd backend
npm install
node server.js
```

## Variables d'environnement

Créer un fichier `.env` dans le dossier backend :

```env
PORT=5000
MONGO_URI=votre_uri_mongodb
JWT_SECRET=votre_secret
```

## Perspectives d'évolution

* Paiement mobile intégré.
* Notifications en temps réel.
* Géolocalisation avancée.
* Intelligence artificielle pour les recommandations.
* Gestion automatisée des itinéraires de drones.
* Livraison autonome dans les zones rurales.

## Auteur

Développé dans le cadre du projet PharmaFly, une solution numérique destinée à moderniser la distribution et la livraison de médicaments.
