const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const reparacionesRoutes = require('./laboratorio/routes/reparaciones/reparacionesRoutes');  // Importa correctamente las rutas

const app = express();

// Conectar a MongoDB
connectDB();

// Usar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Permitir solicitudes desde el frontend (ajusta si es necesario)
  methods: ['GET', 'PUT', 'POST', 'PATCH'],  // Aseguramos que los métodos POST y PATCH estén permitidos
  allowedHeaders: ['Content-Type'],   // Los headers permitidos
}));

// Middleware para parsear JSON
app.use(express.json());

// Conectar las rutas
app.use('/api/laboratorio/reparaciones', reparacionesRoutes);  // Asegúrate de que la ruta base coincida con lo que has configurado

// Configuración de puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
