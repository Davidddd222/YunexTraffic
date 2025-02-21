"use client";

// pages/lab.tsx (o donde tengas tu componente Lab)
import React, { useState } from 'react';
import Header from '@/components/Header';
import Soat from './components/Soat';
import Documentos from './components/Documentos';

type Section = 'reparaciones' | 'balance' | 'general' | 'ensambles' | 'soat' | 'documentos';

const Vehicles = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('soat');

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
                onClick={() => handleNavigation('soat')}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === 'soat' ? 'font-bold' : ''
                }`}
              >
                Soat
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleNavigation('balance')}
                className={`w-full text-left hover:text-gray-400 ${
                  activeSection === 'balance' ? 'font-bold' : ''
                }`}
              >
                Documentos
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-center">Vehicles</h1>
          <p className="mb-4 text-center">
            Página de Vehiculos.
          </p>

          {/* Secciones de contenido */}
          {activeSection === 'soat' && (
            <Soat />
          )}

          {activeSection === 'balance' && (
            <Documentos />
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;