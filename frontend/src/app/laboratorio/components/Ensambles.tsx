// components/Ensambles.tsx
import React from 'react';

const Ensambles = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Barra superior con acciones */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Ensambles</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Nuevo Ensamble
          </button>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
              &lt;
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor de tarjetas con scroll */}
      <div className="max-h-[70vh] overflow-y-auto">
        {/* Tarjeta de ejemplo 1 */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Opciones:</span> 4</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Consecutivos:</span> fghfg</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Grafo:</span> SX Protector</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Tipo de Ensamble:</span> 2</p>
            </div>
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Cantidad:</span> 1</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Estado:</span> finished</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Contrato:</span> fgh</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Cliente:</span> fg</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Remitente:</span> fgh</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Fecha Estimada:</span> 2024-02-08</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Recibido:</span> to Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de ejemplo 2 */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Opciones:</span> 5</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Consecutivos:</span> abc123</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Grafo:</span> Controlador</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Tipo de Ensamble:</span> 3</p>
            </div>
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Cantidad:</span> 2</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Estado:</span> in progress</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Contrato:</span> xyz</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Cliente:</span> Cliente B</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Remitente:</span> Remitente B</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Fecha Estimada:</span> 2024-03-15</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Recibido:</span> reprocessing</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de ejemplo 3 */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Opciones:</span> 6</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Consecutivos:</span> def456</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Grafo:</span> Bandejas</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Tipo de Ensamble:</span> 1</p>
            </div>
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Cantidad:</span> 5</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Estado:</span> pending</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Contrato:</span> 123</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Cliente:</span> Cliente C</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Remitente:</span> Remitente C</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Fecha Estimada:</span> 2024-04-10</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Recibido:</span> to Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de ejemplo 4 */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Opciones:</span> 7</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Consecutivos:</span> ghi789</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Grafo:</span> Controlador</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Tipo de Ensamble:</span> 10</p>
            </div>
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Cantidad:</span> 3</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Estado:</span> finished</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Contrato:</span> 456</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Cliente:</span> Cliente D</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Remitente:</span> Remitente D</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Fecha Estimada:</span> 2024-05-03</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Recibido:</span> observations</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de ejemplo 5 (nueva) */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Opciones:</span> 8</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Consecutivos:</span> jkl012</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Grafo:</span> SX Protector</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Tipo de Ensamble:</span> 4</p>
            </div>
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Cantidad:</span> 2</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Estado:</span> in progress</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Contrato:</span> 789</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Cliente:</span> Cliente E</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Remitente:</span> Remitente E</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Fecha Estimada:</span> 2024-06-01</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Recibido:</span> reprocessing</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de ejemplo 6 (nueva) */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Opciones:</span> 9</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Consecutivos:</span> mno345</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Grafo:</span> Bandejas</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Tipo de Ensamble:</span> 5</p>
            </div>
            <div>
              <p className="text-sm text-gray-600"><span className="font-medium">Cantidad:</span> 4</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Estado:</span> pending</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Contrato:</span> 101</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Cliente:</span> Cliente F</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Remitente:</span> Remitente F</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Fecha Estimada:</span> 2024-07-15</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Recibido:</span> to Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ensambles;