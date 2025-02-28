import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';  // Importamos React Hook Form
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      equipoID: '',
      tecnico: '',
      fechaInicio: new Date().toISOString().split('T')[0],
      descripcion: '',
      prioridad: 'Baja',
      horasEstimadas: '',
      estado: 'En revisión',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/laboratorio/reparaciones', data);

      toast.success('Reparación registrada correctamente.');

      // Limpiar formulario
      setValue('equipoID', '');
      setValue('tecnico', '');
      setValue('fechaInicio', new Date().toISOString().split('T')[0]);
      setValue('descripcion', '');
      setValue('prioridad', 'Baja');
      setValue('horasEstimadas', '');
      setValue('estado', 'En revisión');
    } catch (error) {
      toast.error('Hubo un problema al registrar la reparación.');
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Iniciar Reparación</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="equipoID" className="block text-sm font-medium text-gray-700">
            ID del equipo
          </label>
          <input
            type="text"
            id="equipoID"
            {...register('equipoID', { required: 'Este campo es obligatorio' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.equipoID && <p className="text-red-500 text-sm">{errors.equipoID.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="tecnico" className="block text-sm font-medium text-gray-700">
            Técnico asignado
          </label>
          <select
            id="tecnico"
            {...register('tecnico', { required: 'Selecciona un técnico' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Seleccionar técnico</option>
            <option value="Juan Pérez">Juan Pérez</option>
            <option value="Ana Gómez">Ana Gómez</option>
            <option value="Carlos López">Carlos López</option>
          </select>
          {errors.tecnico && <p className="text-red-500 text-sm">{errors.tecnico.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">
            Fecha de inicio
          </label>
          <input
            type="date"
            id="fechaInicio"
            {...register('fechaInicio', { required: 'Este campo es obligatorio' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.fechaInicio && <p className="text-red-500 text-sm">{errors.fechaInicio.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
            Descripción del problema
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
          <label htmlFor="prioridad" className="block text-sm font-medium text-gray-700">
            Prioridad
          </label>
          <select
            id="prioridad"
            {...register('prioridad')}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
            {...register('horasEstimadas', { required: 'Este campo es obligatorio' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.horasEstimadas && <p className="text-red-500 text-sm">{errors.horasEstimadas.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
            Estado inicial
          </label>
          <select
            id="estado"
            {...register('estado')}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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

      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default EmpezarForm;
