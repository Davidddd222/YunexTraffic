// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { RiNotification2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";  // Importar el botón
import { SidebarTrigger } from "@/components/ui/sidebar"; // Asegúrate de que SidebarTrigger está importado

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 w-full py-4">
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
                    <Button variant="link" className="text-base">Reporte de hora</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/lab">
                    <Button variant="link" className="text-base">Laboratorio</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <Button variant="link" className="text-base">EHS</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <Button variant="link" className="text-base">Almacen</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <Button variant="link" className="text-base">Vehiculos</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <Button variant="link" className="text-base">Garantías</Button>
                  </Link>
                </li>
              </ul>
            </nav>

          {/* Bloque de autenticación */}
          <div className="text-black flex gap-4 items-center">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <RiNotification2Line 
              className="text-black h-6 w-7 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            />
            <SidebarTrigger/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
