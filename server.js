// server.js (avec Express)
const express = require('express');
const app = express(); // Initialiser l'application Express
const PORT = process.env.PORT || 3000;

// Définir une route simple (GET /)
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Express !');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
