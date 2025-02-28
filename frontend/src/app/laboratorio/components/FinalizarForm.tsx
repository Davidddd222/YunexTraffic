import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';  // Importamos React Hook Form
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  equipoID: string;
  estadoModulo: string;
  descripcion: string;
  fechaFinalizacion: string;
};

const FinalizarForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      equipoID: '',
      estadoModulo: 'Reparado',
      descripcion: '',
      fechaFinalizacion: new Date().toISOString().split('T')[0],
    },
  });

  const [repairData, setRepairData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEquipoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const equipoID = e.target.value;
    setValue('equipoID', equipoID); // Set equipoID in form

    if (equipoID) {
      try {
        const response = await axios.get(`http://localhost:5000/api/laboratorio/reparaciones/equipo/${equipoID}`);
        
        // Si la respuesta contiene datos, actualizamos el formulario
        if (response.data) {
          setRepairData(response.data);
          setValue('descripcion', response.data.descripcion || '');  // Set existing description
        }
      } catch (err) {
        setError('Error al cargar los datos de la reparación.');
        console.error('Error al obtener los datos de la reparación:', err);
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Realizamos la solicitud PUT para finalizar la reparación
      const response = await axios.put(
        `http://localhost:5000/api/laboratorio/reparaciones/finalizar/${data.equipoID}`,
        {
          estadoModulo: data.estadoModulo,
          descripcion: data.descripcion,
          fechaFinalizacion: data.fechaFinalizacion,
        }
      );

      if (response.data) {
        toast.success('Reparación finalizada correctamente.');

        // Limpiar formulario
        setValue('equipoID', '');
        setValue('estadoModulo', 'Reparado');
        setValue('descripcion', '');
        setValue('fechaFinalizacion', new Date().toISOString().split('T')[0]);
        setRepairData(null);  // Limpiar los datos de la reparación
      }
    } catch (error) {
      toast.error('Hubo un problema al finalizar la reparación.');
      console.error('Error al finalizar la reparación:', error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Finalizar Reparación</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="equipoID" className="block text-sm font-medium text-gray-700">
            ID del equipo
          </label>
          <input
            type="text"
            id="equipoID"
            {...register('equipoID', { required: 'Este campo es obligatorio' })}
            onChange={handleEquipoChange}  // Cargar datos de reparación cuando el ID cambia
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.equipoID && <p className="text-red-500 text-sm">{errors.equipoID.message}</p>}
        </div>

        {repairData && (
          <>
            <div className="mb-4">
              <label htmlFor="estadoModulo" className="block text-sm font-medium text-gray-700">
                Estado del módulo
              </label>
              <select
                id="estadoModulo"
                {...register('estadoModulo')}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                {...register('descripcion', { required: 'Este campo es obligatorio' })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows={4}
              />
              {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="fechaFinalizacion" className="block text-sm font-medium text-gray-700">
                Fecha de finalización
              </label>
              <input
                type="date"
                id="fechaFinalizacion"
                {...register('fechaFinalizacion', { required: 'Este campo es obligatorio' })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.fechaFinalizacion && <p className="text-red-500 text-sm">{errors.fechaFinalizacion.message}</p>}
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
