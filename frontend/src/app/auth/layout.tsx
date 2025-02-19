// src/app/auth/layout.tsx
"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaRegUser } from "react-icons/fa";
import { RiNotification2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";  // Importar el botón
import  Image  from "next/image";

// Este será el header único para la página de autenticación
const AuthHeader = () => (
  <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
      {/* Logo */}
      <div className="relative w-[100px] h-[100px] flex items-center">
        <Image
          src="/LogoYunex.svg"
          alt="Logo Yunex"
          layout="intrinsic"
          width={200}
          height={200}
        />
      </div>

      {/* Navegación */}
      <nav>
        <ul className="font-bold font-sans flex space-x-2 items-center">
          <li>
            <Link href="/">
              <Button variant="link" className="text-base">Inicio</Button>
            </Link>
          </li>
          <li>
            <Link href="/reporte-de-hora">
              <Button variant="link" className="text-base">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button variant="link" className="text-base">Index</Button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bloque de autenticación */}
      <div className="text-black flex gap-4 items-center">
        <SignedOut>
          <SignInButton>
            {/* Aquí usamos un ícono en lugar del texto */}
            <FaRegUser className="text-black text-xl cursor-pointer" />
          </SignInButton>
        </SignedOut>

        {/* Si el usuario está logueado, mostrar el UserButton */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Ícono de notificaciones */}
        <RiNotification2Line className="text-black h-6 w-7 cursor-pointer hover:text-gray-300 transition-colors duration-300" />
      </div>
    </div>
  </header>
);

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthHeader /> {/* Aquí colocas el header específico para /auth */}
      <main>{children}</main>
    </div>
  );
}
