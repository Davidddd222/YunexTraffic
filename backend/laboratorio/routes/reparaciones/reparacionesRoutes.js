const express = require('express');
const router = express.Router();
const reparacionesController = require('../../controllers/reparaciones/reparacionesController');

// Crear una nueva reparación
router.post('/', reparacionesController.crear);

// Finalizar una reparación
router.post('/finalizar/:id', reparacionesController.finalizar);

module.exports = router;
