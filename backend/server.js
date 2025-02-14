// backend/server.js
const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
