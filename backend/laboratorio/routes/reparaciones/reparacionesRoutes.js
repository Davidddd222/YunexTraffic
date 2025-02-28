// backend/laboratorio/routes/reparaciones/reparacionesRoutes.js
const express = require('express');
const router = express.Router();
const reparacionesController = require('../../controllers/reparaciones/reparacionesController');
const { finalizarReparacion } = require('../../controllers/reparaciones/reparacionesController');


// Obtener una reparación por equipoID (en lugar de _id)
router.get('/equipo/:equipoID', reparacionesController.obtenerPorId);

// Otras rutas para crear y finalizar reparaciones...
router.post('/', reparacionesController.crear);

router.put('/finalizar/:equipoID', finalizarReparacion);

module.exports = router;
