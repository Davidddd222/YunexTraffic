// controllers/reparaciones/reparacionesController.js
const Reparacion = require('../../models/Reparacion');  // Asegúrate de que esta sea la ruta correcta

// Finalizar reparación
exports.finalizar = async (req, res) => {
  try {
    const { id } = req.params;  // Tomamos el ID del parámetro de la URL
    const { estado, descripcion } = req.body;  // Estado y descripción que se envían en el cuerpo de la solicitud

    // Buscar la reparación por _id de MongoDB
    const reparacion = await Reparacion.findById(id);  // Asegúrate de usar findById

    if (!reparacion) {
      return res.status(404).json({ message: 'Reparación no encontrada' });
    }

    // Actualizamos los campos de estado y descripción
    reparacion.estado = estado;
    reparacion.descripcion = descripcion;
    reparacion.fechaFinalizacion = new Date();  // Fecha de finalización al momento de actualizar

    // Guardamos la reparación actualizada en la base de datos
    await reparacion.save();

    return res.status(200).json({ message: 'Reparación finalizada correctamente', reparacion });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al finalizar la reparación' });
  }
};
