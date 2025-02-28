const Reparacion = require('../../models/reparaciones/reparacionModel');

// Crear reparación
exports.crearReparacion = async (data) => {
  try {
    const reparacion = new Reparacion(data);
    return await reparacion.save();
  } catch (error) {
    console.error('Error al crear la reparación:', error);
    throw new Error('Error al crear la reparación');
  }
};

// Finalizar reparación
exports.finalizarReparacion = async (id, estado, descripcion) => {
  const reparacion = await Reparacion.findById(id);
  if (!reparacion) throw new Error('Reparación no encontrada');
  
  reparacion.estado = estado;
  reparacion.descripcion = descripcion;
  reparacion.fechaFinalizacion = new Date();

  return await reparacion.save();
};

// Obtener reparación por equipoID
exports.obtenerPorEquipoID = async (equipoID) => {
  try {
    console.log(`Buscando reparación con equipoID: ${equipoID}`); // Log para depurar
    const reparacion = await Reparacion.findOne({ equipoID });

    if (!reparacion) {
      console.log('Reparación no encontrada');
      return null; // Si no se encuentra, retornar null
    }

    return reparacion;
  } catch (error) {
    console.error('Error al obtener la reparación por equipoID:', error);
    throw new Error('Error al obtener la reparación');
  }
};

