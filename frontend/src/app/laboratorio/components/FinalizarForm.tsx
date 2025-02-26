import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Importa Toastify
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de Toastify

// Definimos el tipo del formulario
type FormData = {
  equipoID: string;
  estadoModulo: string;
  descripcion: string;
  fechaFinalizacion: string;
};

const FinalizarForm = () => {
  // Definir el estado del formulario
  const [formData, setFormData] = useState<FormData>({
    equipoID: '',
    estadoModulo: 'Reparado',  // Estado inicial puede ser "Reparado" por defecto
    descripcion: '',
    fechaFinalizacion: new Date().toISOString().split('T')[0], // Fecha actual
  });

  const [repairData, setRepairData] = useState<any>(null); // Para almacenar los datos de la reparación que se va a finalizar
  const [error, setError] = useState<string | null>(null); // Para manejar posibles errores

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para obtener los detalles de la reparación al ingresar el ID del equipo
  const handleEquipoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      equipoID: value,
    }));

    if (value) {
      try {
        // Solicitar los datos de la reparación con el equipoID
        const response = await axios.get(`http://localhost:5000/api/laboratorio/reparaciones/${value}`);
        if (response.data) {
          setRepairData(response.data); // Guardamos los datos de la reparación
          setFormData(prevState => ({
            ...prevState,
            descripcion: response.data.descripcion || '', // Rellenar la descripción si hay alguna
          }));
        }
      } catch (err) {
        setError('Error al cargar los datos de la reparación.');
        console.error('Error al obtener los datos de la reparación:', err);
      }
    }
  };

  // Función para enviar la solicitud al backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.equipoID) {
      toast.error('Por favor, ingrese el ID del equipo.');
      return;
    }

    try {
      // Cambiar de POST a PUT porque es una actualización
      const response = await axios.put(
        `http://localhost:5000/api/laboratorio/reparaciones/finalizar/${formData.equipoID}`,
        formData
      );

      // Si la solicitud es exitosa
      if (response.data) {
        toast.success('Reparación finalizada correctamente.');
        setFormData({
          equipoID: '',
          estadoModulo: 'Reparado',
          descripcion: '',
          fechaFinalizacion: new Date().toISOString().split('T')[0],
        });
      }
    } catch (error) {
      // Si ocurre un error
      toast.error('Hubo un problema al finalizar la reparación. Intenta nuevamente.');
      console.error('Error al finalizar la reparación:', error);
    }
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
            onChange={handleEquipoChange} // Maneja el cambio de equipoID
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {repairData && (
          <>
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
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                Descripción de la reparación
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
            >
              Finalizar Reparación
            </button>
          </>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}

      </form>

      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default FinalizarForm;
