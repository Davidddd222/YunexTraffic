// backend/laboratorio/services/reparaciones/reparacionesService.js
const Reparacion = require('../../models/reparaciones/reparacionModel');

exports.crearReparacion = async (data) => {
  const reparacion = new Reparacion(data);
  return await reparacion.save();
};

exports.finalizarReparacion = async (id) => {
  const reparacion = await Reparacion.findById(id);
  if (!reparacion) throw new Error('Reparación no encontrada');
  reparacion.estado = 'Finalizada';
  reparacion.fechaFinalizacion = Date.now();
  return await reparacion.save();
};
