// backend/laboratorio/models/reparaciones/reparacionModel.js
const mongoose = require('mongoose');

const reparacionSchema = new mongoose.Schema({
  equipoID: { 
    type: String, 
    required: true, 
    unique: true  // Asegura que no haya duplicados por ID de equipo
  },
  tecnico: { 
    type: String, 
    required: true 
  },
  fechaInicio: { 
    type: Date, 
    required: true 
  },
  descripcion: { 
    type: String, 
    required: true 
  },
  prioridad: { 
    type: String, 
    required: true 
  },
  horasEstimadas: { 
    type: Number, 
    required: true 
  },
  estado: { 
    type: String, 
    enum: ['En revisión', 'En proceso', 'Reparado', 'Irreparable'], // Asegura que el estado sea uno de estos valores
    required: true 
  },
  fechaFinalizacion: { 
    type: Date 
  } // Este campo se rellenará cuando la reparación se finalice
});

// Cambiar el nombre de la colección a 'reparacions'
module.exports = mongoose.model('Reparacion', reparacionSchema, 'reparacions');
