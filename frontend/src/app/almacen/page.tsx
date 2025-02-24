"use client";

// pages/lab.tsx (o donde tengas tu componente Lab)
import React, { useState } from 'react';
import Header from '@/components/Header';


import Archivos from '../garantias/components/Archivos';
import General from '../garantias/components/General';
import Balance from '../garantias/components/Balance';
import Garantias from '../garantias/components/Garantias';

type Section = 'garantias' | 'general' | 'balance' | 'archivos';

const Almacen = () => {
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
          } transition-transform duration-300 ease-in-out w-64 bg-gray-800 text-white h-screen p-4`}
        >
          <h2 className="text-xl font-semibold mb-4">Menú</h2>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('garantias')}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === 'garantias' ? 'font-bold' : ''
                }`}
              >
                Almacen
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('general')}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === 'general' ? 'font-bold' : ''
                }`}
              >
                Almacen 1
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('balance')}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === 'balance' ? 'font-bold' : ''
                }`}
              >
                Almacen 2
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('archivos')}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === 'archivos' ? 'font-bold' : ''
                }`}
              >
                Almacen 3 
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-center">Almacen</h1>
          <p className="mb-4 text-center">
            Aquí podrás ver todos los reportes.
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

export default Almacen;