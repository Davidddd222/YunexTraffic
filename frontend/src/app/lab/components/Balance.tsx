// components/Balance.tsx
import React from 'react';

const Balance = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Título de la sección */}
      <h2 className="text-2xl font-semibold mb-4">Balance</h2>

      {/* Estadísticas Globales */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-center">Estadísticas Globales</h3>

        {/* Módulos */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-center">Módulos</h4>
          <div className="grid grid-cols-5 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600">Reparándose</p>
              <p className="font-semibold">0 de 0</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600">Para reparar</p>
              <p className="font-semibold">0 de 0</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600">Reparados</p>
              <p className="font-semibold">0 de 0</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600">Irreparables</p>
              <p className="font-semibold">0 de 0</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600">Aprobados</p>
              <p className="font-semibold">0 de 0</p>
            </div>
          </div>
        </div>

        {/* Tiempo de reparación */}
        <div className="mb-4">
  {/* Contenedor flexible para los títulos */}
  <div className="flex justify-between items-center mb-2 px-4">
    <h4 className="text-lg font-semibold mb-4 ml-20">Tiempo de reparación</h4>
    <h4 className="text-lg font-semibold mb-4 mr-20">Tiempo de salida</h4>
  </div>

  {/* Contenido debajo de los títulos */}
  <div className="grid grid-cols-4 gap-4">
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <p className="text-gray-600">Cumplió</p>
      <p className="font-semibold">0 de 0</p>
    </div>
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <p className="text-gray-600">No cumplió</p>
      <p className="font-semibold">0 de 0</p>
    </div>
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <p className="text-gray-600">Cumplió</p>
      <p className="font-semibold">0 de 0</p>
    </div>
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <p className="text-gray-600">No cumplió</p>
      <p className="font-semibold">0 de 0</p>
    </div>
  </div>
</div>
      </div>

      {/* Botón para mostrar gráficas */}
      <div className="text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Mostrar Gráficas
        </button>
      </div>
    </div>
  );
};

export default Balance;