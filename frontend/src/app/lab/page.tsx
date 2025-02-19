// src/app/reporte-de-hora/page.tsx

import React from 'react';
import Header from '@/components/Header';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; // Asegúrate de que AppSidebar está importado

const Lab = () => {
  const reportes = [
    { id: 1, empleado: 'Juan Pérez', horas: 8, fecha: '2025-02-12' },
    { id: 2, empleado: 'Ana López', horas: 7, fecha: '2025-02-11' },
    { id: 3, empleado: 'Carlos Ruiz', horas: 6, fecha: '2025-02-10' },
  ];

  return (
    <>

    {/* Header afuera del SidebarProvider */}
      <div className="">
        <Header />
      </div>

      <SidebarProvider>
        <div className="flex">
          {/* Sidebar solo en esta página */}
          <AppSidebar />

          <div className="flex-1">
            {/* Agregar SidebarTrigger aquí para que el botón sea visible */}
            <SidebarTrigger />

            <h1 className="text-3xl font-semibold mb-4 text-end">Lab</h1>
            <p className="mb-4">
              Aquí podrás ver todos los reportes de horas generados.
            </p>

            
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Lab;
