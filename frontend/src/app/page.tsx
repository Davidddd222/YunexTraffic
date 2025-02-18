"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";  // Si tienes un componente Header común

export default function Home() {
  const { user, isLoaded } = useUser();  // Hook de Clerk
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        // Si el usuario no está logueado, redirige a la página de autenticación
        router.push("/auth");
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <p>Loading...</p>;  // O puedes mostrar un loader mientras se carga el estado de autenticación
  }

  // Si el usuario está autenticado, muestra la página principal
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20" style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}>
        <h1 className="text-xl font-bold text-center">¡Welcome!</h1>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      </div>
    </>
  );
}
