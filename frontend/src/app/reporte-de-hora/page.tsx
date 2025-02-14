// src/app/reporte-de-hora/page.tsx

'use client';  // Marca este archivo como un componente del cliente

import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';  // Usamos `next/navigation` para poder usar `router.push`
import Header from '@/components/Header';

// Tu código aquí
export default function ReporteDeHora() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirigir si no está autenticado
      router.push('/sign-in'); 
    }
  }, [user, router]);

  return (
    <div>
      <Header />
      <h1>Reporte de Hora</h1>
      {/* Aquí va el contenido del reporte */}
    </div>
  );
}
