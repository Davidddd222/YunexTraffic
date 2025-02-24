// FinalizarForm.tsx

import React, { useState } from 'react';

const FinalizarForm = () => {
  // Definir el estado del formulario
  const [formData, setFormData] = useState({
    equipoID: '',
    estadoModulo: 'Reparado',
    descripcionReparacion: '',
    fechaFinalizacion: new Date().toISOString().split('T')[0], // Fecha actual
    horasReales: '',
    responsableFinal: '',
    comentarios: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend o almacenarlos
    console.log(formData);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Finalizar Reparación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="equipoID" className="block text-sm font-medium text-gray-700">
            ID del equipo
          </label>
          <input
            type="text"
            id="equipoID"
            name="equipoID"
            value={formData.equipoID}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="estadoModulo" className="block text-sm font-medium text-gray-700">
            Estado del módulo
          </label>
          <select
            id="estadoModulo"
            name="estadoModulo"
            value={formData.estadoModulo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="Reparado">Reparado</option>
            <option value="Irreparable">Irreparable</option>
            <option value="Pendiente revisión adicional">Pendiente revisión adicional</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="descripcionReparacion" className="block text-sm font-medium text-gray-700">
            Descripción de la reparación
          </label>
          <textarea
            id="descripcionReparacion"
            name="descripcionReparacion"
            value={formData.descripcionReparacion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fechaFinalizacion" className="block text-sm font-medium text-gray-700">
            Fecha de finalización
          </label>
          <input
            type="date"
            id="fechaFinalizacion"
            name="fechaFinalizacion"
            value={formData.fechaFinalizacion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="horasReales" className="block text-sm font-medium text-gray-700">
            Horas reales utilizadas
          </label>
          <input
            type="number"
            id="horasReales"
            name="horasReales"
            value={formData.horasReales}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="responsableFinal" className="block text-sm font-medium text-gray-700">
            Responsable final
          </label>
          <input
            type="text"
            id="responsableFinal"
            name="responsableFinal"
            value={formData.responsableFinal}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700">
            Comentarios adicionales
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md mt-4"
        >
          Finalizar Reparación
        </button>
      </form>
    </div>
  );
};

export default FinalizarForm;
