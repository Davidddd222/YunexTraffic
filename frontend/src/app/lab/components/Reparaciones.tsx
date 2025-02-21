// components/Reparaciones.tsx
import React from 'react';

const Reparaciones = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Barra superior con acciones */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Reparaciones</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Balance
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Empezar
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Finalizar
          </button>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabla de detalles */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Ticket de inicio</th>
              <th className="px-4 py-2 border-b">Fecha Horas</th>
              <th className="px-4 py-2 border-b">Equipo</th>
              <th className="px-4 py-2 border-b">Ciudad</th>
              <th className="px-4 py-2 border-b">Falta encontrada</th>
              <th className="px-4 py-2 border-b">Estado módulo</th>
              <th className="px-4 py-2 border-b">Reparación Estimada (Horas)</th>
              <th className="px-4 py-2 border-b">Procedimiento</th>
              <th className="px-4 py-2 border-b">Responsable</th>
              
            </tr>
          </thead>
          <tbody>
            {/* Fila de ejemplo */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">12345</td>
              <td className="px-4 py-2 border-b">2023-10-01</td>
              <td className="px-4 py-2 border-b">Equipo A</td>
              <td className="px-4 py-2 border-b">Ciudad X</td>
              <td className="px-4 py-2 border-b">Falla eléctrica</td>
              <td className="px-4 py-2 border-b">En revisión</td>
              <td className="px-4 py-2 border-b">5</td>
              <td className="px-4 py-2 border-b">Reemplazo de componentes</td>
              <td className="px-4 py-2 border-b">Juan Pérez</td>
            </tr>
            {/* Puedes agregar más filas aquí */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reparaciones;