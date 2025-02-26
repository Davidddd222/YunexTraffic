const Reparacion = require('../models/reparaciones/reparacionModel');

exports.finalizarReparacion = async (id) => {
  try {
    // Buscar la reparación en la base de datos por su ID
    const reparacion = await Reparacion.findById(id);

    // Si no se encuentra la reparación, lanzamos un error
    if (!reparacion) {
      throw new Error('Reparación no encontrada');
    }

    // Actualizar el estado de la reparación a "Finalizada"
    reparacion.estado = 'Finalizada';
    reparacion.fechaFinalizacion = new Date(); // Actualizamos la fecha de finalización

    // Guardar los cambios en la base de datos
    await reparacion.save();

    return reparacion; // Devolvemos la reparación actualizada
  } catch (error) {
    // Lanzamos un error si algo falla
    throw new Error('Error al finalizar la reparación: ' + error.message);
  }
};
