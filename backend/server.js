// backend/server.js
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const laboratorioRoutes = require('./laboratorio/routes/reparaciones/reparacionesRoutes');  // Asegúrate de importar la ruta correcta
require('dotenv').config();

const app = express();

// Conectar a MongoDB
connectDB();

// Usar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Permitir solicitudes desde el frontend
  methods: ['GET', 'POST'],         // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Headers permitidos
}));

// Middleware para parsear JSON
app.use(express.json());

// Conectar las rutas
app.use('/api/laboratorio/reparaciones', laboratorioRoutes); // Asegúrate de que la ruta base coincida con lo que has configurado

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
