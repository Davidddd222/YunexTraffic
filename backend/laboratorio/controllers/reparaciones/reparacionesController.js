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
    const { id } = req.params;  // El ID del equipo que se pasa en la URL
    const { estado, descripcion } = req.body;  // Recibimos el estado (Reparado o Irreparable) y la descripción del cuerpo de la solicitud

    // Buscar la reparación por equipoID (en lugar de byId para que coincida con la estructura de tu modelo)
    const reparacion = await Reparacion.findOne({ equipoID: id });

    if (!reparacion) {
      return res.status(404).json({ message: 'Reparación no encontrada' });
    }

    // Actualizamos los campos de estado, descripción y fecha de finalización
    reparacion.estado = estado;
    reparacion.descripcion = descripcion;
    reparacion.fechaFinalizacion = new Date();  // La fecha actual de finalización

    // Guardamos la reparación actualizada
    await reparacion.save();

    return res.status(200).json({ message: 'Reparación finalizada correctamente', reparacion });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al finalizar la reparación' });
  }
};

module.exports = { crear, finalizar };
