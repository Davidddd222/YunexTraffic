"use client";

// pages/lab.tsx (o donde tengas tu componente Lab)
import React, { useState } from 'react';
import Header from '@/components/Header';


import Archivos from '../garantias/components/Archivos';
import General from '../garantias/components/General';
import Balance from '../garantias/components/Balance';
import Garantias from '../garantias/components/Garantias';

type Section = 'garantias' | 'general' | 'balance' | 'archivos';

const ReporteDeHora = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('garantias');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Contenedor principal */}
      <div className="flex">
        {/* Botón para abrir/cerrar el sidebar (solo visible en móviles) */}
        <button
          onClick={toggleSidebar}
          className="fixed lg:hidden z-50 p-2 bg-gray-800 text-white rounded-md m-2"
        >
          {isSidebarOpen ? 'Cerrar' : 'Abrir'}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed lg:relative lg:translate-x-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out w-64 rounded-sm bg-neutral-800 text-white h-screen p-4`}
        >
          <h2 className="text-xl font-semibold mb-4 ml-4">Menú</h2>
          <ul>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation('garantias')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'garantias' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                Sin encontrar
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation('general')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'general' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                Sin encontrar 2
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation('balance')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'balance' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                Sin encontrar 3
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleNavigation('archivos')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'archivos' ? 'font-bold p-2 rounded-sm bg-blue-600' : ''
                }`}
              >
                Sin encontrar 4  
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-center">Reporte de Horas</h1>
          <p className="mb-4 text-center">
            Aquí podrás ver todos los reportes de horas generados.
          </p>

          {/* Secciones de contenido */}
          {activeSection === 'garantias' && (
            <Garantias />
          )}

          {activeSection === 'general' && (
            <General />
          )}

          {activeSection === 'balance' && (
            <Balance /> 
          )}

          {activeSection === 'archivos' && (
            <Archivos />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReporteDeHora;