// src/app/reporte-de-hora/page.tsx

import React from 'react';
import Header from '@/components/Header';

const Lab = () => {
  const reportes = [
    { id: 1, empleado: 'Juan Pérez', horas: 8, fecha: '2025-02-12' },
    { id: 2, empleado: 'Ana López', horas: 7, fecha: '2025-02-11' },
    { id: 3, empleado: 'Carlos Ruiz', horas: 6, fecha: '2025-02-10' },
  ];

  return (
    <div className="">
      {/* Contenedor aislado para el Header */}
      <div className="header-container">
        <Header />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Reporte de Horaaaaaaaaaaa</h1>
      <p className="mb-4">
        Aquí podrás ver todos los reportes de horas generados.
      </p>

      {/* Tabla de reportes */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Empleabdo</th>
              <th className="px-4 py-2 border-b">Horas</th>
              <th className="px-4 py-2 border-b">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((reporte) => (
              <tr key={reporte.id}>
                <td className="px-4 py-2 border-b">{reporte.id}</td>
                <td className="px-4 py-2 border-b">{reporte.empleado}</td>
                <td className="px-4 py-2 border-b">{reporte.horas}</td>
                <td className="px-4 py-2 border-b">{reporte.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lab;
