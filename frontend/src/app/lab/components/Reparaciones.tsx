// components/Reparaciones.tsx
import React, { useState } from 'react'; 
import EmpezarForm from './EmpezarForm';
import FinalizarForm from './FinalizarForm';

const Reparaciones = () => {
  const [showEmpezar, setShowEmpezar] = useState(false);
  const [showFinalizar, setShowFinalizar] = useState(false);

  const handleEmpezarClick = () => {
    setShowEmpezar(true);
    setShowFinalizar(false); // Si abres uno, cierras el otro
  };

  const handleFinalizarClick = () => {
    setShowFinalizar(true);
    setShowEmpezar(false); // Si abres uno, cierras el otro
  };

  const handleCloseModal = () => {
    setShowEmpezar(false);
    setShowFinalizar(false);
  };

  // Función para cerrar el modal al hacer clic fuera de él
  const handleClickOutside = (e: React.MouseEvent) => {
    const modalContent = e.target as HTMLElement;
    if (modalContent && modalContent.classList.contains('modal-content')) {
      return; // Si el clic es dentro del modal, no hacer nada
    }
    handleCloseModal(); // Si el clic es fuera del modal, cerrar
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Barra superior con acciones */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Reparaciones</h2>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleEmpezarClick}
          >
            Empezar
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleFinalizarClick}
          >
            Finalizar
          </button>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Modal flotante para "Empezar" */}
      {showEmpezar && (
        <div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" 
          onClick={handleClickOutside}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-screen overflow-auto modal-content">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl text-gray-500"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Formulario Empezar</h3>
            <EmpezarForm />
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Modal flotante para "Finalizar" */}
      {showFinalizar && (
        <div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-screen overflow-auto modal-content">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl text-gray-500"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Formulario Finalizar</h3>
            <FinalizarForm />
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Tabla de detalles */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-6 py-4 border-b">ID</th>
              <th className="px-6 py-4 border-b">Fecha de Inicio</th>
              <th className="px-6 py-4 border-b">Equipo</th>
              <th className="px-6 py-4 border-b">Falla encontrada</th>
              <th className="px-6 py-4 border-b">Estado módulo</th>
              <th className="px-6 py-4 border-b">Reparación Estimada (Horas)</th>
              <th className="px-6 py-4 border-b">Responsable</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila de ejemplo */}
            <tr className="hover:bg-gray-50 transition-colors duration-300">
              <td className="px-6 py-4 border-b">12345</td>
              <td className="px-6 py-4 border-b">2023-10-01</td>
              <td className="px-6 py-4 border-b">Portátil HP (CPU ST-950)</td>
              <td className="px-6 py-4 border-b">Falla eléctrica</td>
              <td className="px-6 py-4 border-b text-yellow-500">En revisión</td>
              <td className="px-6 py-4 border-b">5</td>
              <td className="px-6 py-4 border-b">Juan Pérez</td>
            </tr>
            {/* Otra fila de ejemplo */}
            <tr className="hover:bg-gray-50 transition-colors duration-300">
              <td className="px-6 py-4 border-b">67890</td>
              <td className="px-6 py-4 border-b">2023-11-15</td>
              <td className="px-6 py-4 border-b">PC Dell (CPU ST-950)</td>
              <td className="px-6 py-4 border-b">Pantalla rota</td>
              <td className="px-6 py-4 border-b text-green-500">Reparado</td>
              <td className="px-6 py-4 border-b">3</td>
              <td className="px-6 py-4 border-b">Ana Gómez</td>
            </tr>
            {/* Agregar más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reparaciones;
