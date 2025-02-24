"use client";

// pages/lab.tsx (o donde tengas tu componente Lab)
import React, { useState } from 'react';
import Header from '@/components/Header';
import Reparaciones from '@/app/lab/components/Reparaciones'; // Importa el componente Reparaciones
import Balance from '@/app/lab/components/Balance';
import General from '@/app/lab/components/General';
import Ensambles from '@/app/lab/components/Ensambles';

type Section = 'reparaciones' | 'balance' | 'general' | 'ensambles';

const Lab = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('reparaciones');

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
          } transition-transform duration-300 ease-in-out w-64 rounded-sm bg-gray-800 text-white h-screen p-4`}
        >
          <h2 className="text-xl font-semibold mb-4 ml-2">Menú</h2>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('reparaciones')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'reparaciones' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                Reparaciones
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('balance')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'balance' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                Balance
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('general')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'general' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                General
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('ensambles')}
                className={`w-full p-2 text-left hover:text-gray-400 ${
                  activeSection === 'ensambles' ? 'font-bold border rounded-sm bg-blue-600' : ''
                }`}
              >
                Ensambles
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-center">Laboratorio</h1>

          {/* Secciones de contenido */}
          {activeSection === 'reparaciones' && (
            <Reparaciones />
          )}

          {activeSection === 'balance' && (
            <Balance />
          )}

          {activeSection === 'general' && (
            <General /> 
          )}

          {activeSection === 'ensambles' && (
            <Ensambles />
          )}
        </div>
      </div>
    </div>
  );
};

export default Lab;