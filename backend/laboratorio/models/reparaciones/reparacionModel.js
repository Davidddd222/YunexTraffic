// backend/laboratorio/models/reparaciones/reparacionModel.js
const mongoose = require('mongoose');

const reparacionSchema = new mongoose.Schema({
  equipoID: { type: String, required: true },
  tecnico: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  descripcion: { type: String, required: true },
  prioridad: { type: String, required: true },
  horasEstimadas: { type: Number, required: true },
  estado: { type: String, required: true }
});

module.exports = mongoose.model('Reparacion', reparacionSchema);
