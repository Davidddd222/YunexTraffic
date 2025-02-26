// routes/reparaciones.js
const express = require('express');
const router = express.Router();
const reparacionesController = require('../../controllers/reparaciones/reparacionesController');

// Ruta para finalizar una reparación
router.post('/finalizar/:id', reparacionesController.finalizar);

module.exports = router;
