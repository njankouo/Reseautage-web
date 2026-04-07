
# Mon Premier Projet MERN

## Description

Ce projet est une application web développée avec la stack MERN (MongoDB, Express, React, Node.js).
Il représente ma première implémentation complète d’une architecture fullstack en JavaScript.

L’application permet de gérer des utilisateurs et des données dynamiques via une interface moderne connectée à une API backend.

---

## Stack Technique

### Frontend

* React.js
* CSS / Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Base de données

* MongoDB avec Mongoose

---

## Structure du Projet

```
/project-root
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│
├── .env
├── package.json
└── README.md
```

---

## Installation

### Cloner le projet

```bash
git clone https://github.com/njankouo/Reseautage-web.git
cd ton-repo
```

### Installer les dépendances

Backend :

```bash
cd backend
npm install
```

Frontend :

```bash
cd ../frontend
npm install
```

---

## Configuration

Créer un fichier `.env` dans le dossier backend :

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Lancement du projet

Backend :

```bash
cd backend
npm run dev
```

Frontend :

```bash
cd frontend
npm start
```

---

## Accès à l’application

* Frontend : [http://localhost:3000](http://localhost:3000)
* Backend : [http://localhost:5000](http://localhost:5000)

---

## Fonctionnalités

* Authentification des utilisateurs
* Opérations CRUD
* API REST
* Interface utilisateur responsive
* Gestion des erreurs

---

## Améliorations Futures

* Notifications en temps réel
* Tableau de bord avancé
* Optimisation mobile
* Intégration de fonctionnalités intelligentes

---

## Auteur

Baltimore B

---

## Licence

Ce projet est distribué sous licence MIT.

---
