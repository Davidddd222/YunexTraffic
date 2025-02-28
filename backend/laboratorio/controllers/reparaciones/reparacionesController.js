const Reparacion = require('../../models/reparaciones/reparacionModel'); // Asegúrate de que esta ruta sea correcta
const reparacionesService = require('../../services/reparaciones/reparacionesService');

// Función para crear una nueva reparación
const crear = async (req, res) => {
  try {
    const { equipoID, tecnico, fechaInicio, descripcion, prioridad, horasEstimadas, estado } = req.body;
    const reparacionData = { equipoID, tecnico, fechaInicio, descripcion, prioridad, horasEstimadas, estado };

    const nuevaReparacion = await reparacionesService.crearReparacion(reparacionData);

    res.status(201).json({ message: 'Reparación registrada exitosamente', reparacion: nuevaReparacion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar la reparación' });
  }
};

// Función para finalizar una reparación
const finalizarReparacion = async (req, res) => {
  try {
    const { equipoID } = req.params;  // Obtener el equipoID de los parámetros
    const { estadoModulo, descripcion, fechaFinalizacion } = req.body;  // Extraer datos del cuerpo

    // Buscar la reparación por equipoID
    const reparacion = await Reparacion.findOne({ equipoID });
    if (!reparacion) {
      return res.status(404).json({ message: 'Reparación no encontrada' });
    }

    // Actualizar la reparación con los datos enviados
    reparacion.estado = estadoModulo;
    reparacion.descripcion = descripcion;
    reparacion.fechaFinalizacion = fechaFinalizacion;

    // Guardar la reparación actualizada
    await reparacion.save();

    return res.status(200).json({ message: 'Reparación finalizada correctamente' });
  } catch (error) {
    console.error('Error al finalizar la reparación:', error);
    return res.status(500).json({ message: 'Error al finalizar la reparación' });
  }
};

// Función para obtener una reparación por equipoID
const obtenerPorId = async (req, res) => {
  try {
    const { equipoID } = req.params; // Obtenemos el equipoID de la URL

    console.log(`Buscando reparación con equipoID: ${equipoID}`); // Verificación del equipoID

    // Buscar la reparación por el equipoID
    const reparacion = await Reparacion.findOne({ equipoID });

    if (!reparacion) {
      console.log('Reparación no encontrada');
      return res.status(404).json({ message: 'Reparación no encontrada' });
    }

    return res.status(200).json(reparacion);
  } catch (error) {
    console.error('Error al obtener la reparación:', error);
    return res.status(500).json({ message: 'Error al obtener la reparación' });
  }
};


module.exports = { 
  crear,
  finalizarReparacion,  // Exportamos la función para finalizar reparaciones
  obtenerPorId  // Exportamos la función para buscar por equipoID
};
