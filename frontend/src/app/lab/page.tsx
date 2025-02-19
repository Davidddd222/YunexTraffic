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

      

            <h1 className="text-3xl font-semibold mb-4 text-center">Lab</h1>
            <p className="mb-4 text-center">
              Aquí podrás ver todos los reportes de horas generados.
            </p>

            
          
    </>
  );
};

export default Lab;
