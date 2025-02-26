// routes/reparaciones/reparacionesRoutes.js
const express = require('express');
const router = express.Router();
const reparacionesController = require('../../controllers/reparaciones/reparacionesController');

// Crear una nueva reparación
router.post('/', reparacionesController.crear);

// Finalizar una reparación (aquí usamos PUT)
router.put('/finalizar/:id', reparacionesController.finalizar);  // Cambiado a PUT

module.exports = router;
