// server.js (avec Express)
const express = require('express');
const app = express(); // Initialiser l'application Express
const PORT = process.env.PORT || 3000;

const connectDB = require('./config/db');
connectDB(); // Connecter à la base de données MongoDB

app.use(express.json({ extended: false })); // Middleware pour parser le JSON dans les requêtes

// Définir une route simple (GET /)
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Express !');
});


app.use('/api/users', require('./routes/api/users')); // Utiliser les routes pour les utilisateurs
app.use('/api/auth', require('./routes/api/auth')); // Utiliser les routes pour l'authentification
// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
