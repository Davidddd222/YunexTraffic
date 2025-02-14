import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      
      <Header />

        {/* El contenido de la página debajo del header */}
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20" style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}>
        <h1 className="text-xl font-bold text-center">Hooola</h1>
        {/* Aquí puedes poner el contenido de tu página */}
      </div>

    </>
  );
}
