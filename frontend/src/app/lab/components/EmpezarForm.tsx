import React, { useState } from 'react';

// Definimos el tipo del formulario
type FormData = {
  equipoID: string;
  tecnico: string;
  fechaInicio: string;
  descripcion: string;
  prioridad: string;
  horasEstimadas: string;
  estado: string;
};

const EmpezarForm = () => {
  // Definir el estado del formulario
  const [formData, setFormData] = useState<FormData>({
    equipoID: '',
    tecnico: '',
    fechaInicio: new Date().toISOString().split('T')[0], // Fecha actual
    descripcion: '',
    prioridad: 'Baja',
    horasEstimadas: '',
    estado: 'En revisión',
  });

  // Cambiar el tipo del evento para manejar todos los tipos de inputs
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
      <h2 className="text-xl font-semibold mb-4">Iniciar Reparación</h2>
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
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tecnico" className="block text-sm font-medium text-gray-700">
            Técnico asignado
          </label>
          <select
            id="tecnico"
            name="tecnico"
            value={formData.tecnico}
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Seleccionar técnico</option>
            <option value="Juan Pérez">Juan Pérez</option>
            <option value="Ana Gómez">Ana Gómez</option>
            <option value="Carlos López">Carlos López</option>
            {/* Agregar más técnicos */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">
            Fecha de inicio
          </label>
          <input
            type="date"
            id="fechaInicio"
            name="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
            Descripción del problema
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="prioridad" className="block text-sm font-medium text-gray-700">
            Prioridad
          </label>
          <select
            id="prioridad"
            name="prioridad"
            value={formData.prioridad}
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="horasEstimadas" className="block text-sm font-medium text-gray-700">
            Horas estimadas
          </label>
          <input
            type="number"
            id="horasEstimadas"
            name="horasEstimadas"
            value={formData.horasEstimadas}
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
            Estado inicial
          </label>
          <select
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange} // Este es el lugar donde se debe pasar el handler
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="En revisión">En revisión</option>
            <option value="En proceso">En proceso</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
        >
          Empezar Reparación
        </button>
      </form>
    </div>
  );
};

export default EmpezarForm;
