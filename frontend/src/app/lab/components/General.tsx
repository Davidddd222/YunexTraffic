// components/General.tsx
import React from 'react';

const General = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Título de la sección */}
      <h2 className="text-2xl font-semibold mb-4">General</h2>

      {/* Tabla de detalles */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Ticket</th>
              <th className="px-4 py-2 border-b">Módulo</th>
              <th className="px-4 py-2 border-b">Sticker</th>
              <th className="px-4 py-2 border-b">Serial</th>
              <th className="px-4 py-2 border-b">Estado</th>
              <th className="px-4 py-2 border-b">Aprobado</th>
              <th className="px-4 py-2 border-b">Cliente</th>
              <th className="px-4 py-2 border-b">Garantía</th>
              <th className="px-4 py-2 border-b">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila de ejemplo */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">L-13</td>
              <td className="px-4 py-2 border-b">BAZ 2 modul w. Parallelports</td>
              <td className="px-4 py-2 border-b">N/A</td>
              <td className="px-4 py-2 border-b">SC0004991</td>
              <td className="px-4 py-2 border-b">repaired</td>
              <td className="px-4 py-2 border-b">Si</td>
              <td className="px-4 py-2 border-b">SDM</td>
              <td className="px-4 py-2 border-b">✅️</td>
              <td className="px-4 py-2 border-b">🌍️</td>
            </tr>
            {/* Puedes agregar más filas aquí */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default General;