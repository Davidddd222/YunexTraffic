// backend/laboratorio/controllers/reparaciones/reparacionesController.js

const Reparacion = require('../../models/reparaciones/reparacionModel');

// Función para crear una nueva reparación
const crear = async (req, res) => {
  try {
    const { equipoID, tecnico, fechaInicio, descripcion, prioridad, horasEstimadas, estado } = req.body;
    const nuevaReparacion = new Reparacion({
      equipoID,
      tecnico,
      fechaInicio,
      descripcion,
      prioridad,
      horasEstimadas,
      estado
    });

    await nuevaReparacion.save();
    res.status(201).json({ message: 'Reparación registrada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar la reparación' });
  }
};

// Función para finalizar una reparación
const finalizar = async (req, res) => {
  try {
    const { id } = req.params;
    const reparacion = await Reparacion.findById(id);

    if (!reparacion) {
      return res.status(404).json({ message: 'Reparación no encontrada' });
    }

    reparacion.estado = 'Finalizada'; // Cambiar estado a 'Finalizada'
    await reparacion.save();
    res.status(200).json({ message: 'Reparación finalizada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al finalizar la reparación' });
  }
};

module.exports = { crear, finalizar };
