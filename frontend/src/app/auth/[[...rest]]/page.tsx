"use client";

import { SignedIn, SignedOut, SignIn, useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AuthPage() {
  const { user, isLoaded } = useUser(); // Hook de Clerk para obtener el estado del usuario
  const router = useRouter();

  // Redirigir al usuario si ya está autenticado
  useEffect(() => {
    if (isLoaded && user) {
      router.push("/"); // Redirigir a la página principal si ya está logueado
    }
  }, [isLoaded, user, router]);

  // Mientras se carga el estado de autenticación, puedes mostrar un loading
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <div className="text-center min-h-screen p-8 pb-20 gap-16 sm:p-20" style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}>
        <h1 className="text-6xl font-semibold break-words">¡Uniting what’s <br /> next  in traffic!</h1>
        <p className=" text-2xl font-medium mt-4">We launch cities into the future.</p>
        <p className=" text-mg mt-4 "> Yunex Traffic develops innovative mobility ecosystems and services for <br /> the smart city making mobility safer, more efficient, and more sustainable <br />  with forward-looking infrastructure and transport solutions.</p>
      </div>
      {/* Bloque de autenticación */}
      
    </div>
  );
}
