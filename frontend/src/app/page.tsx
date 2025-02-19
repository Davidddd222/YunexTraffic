"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header"; 

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // UseEffect solo corre en cliente y solo redirige si es necesario
  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push("/auth");
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <Header />
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20" style={{ background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)' }}>
        <h1 className="text-xl font-bold text-center">¡Welcome!</h1>
        <p>Lorem Ipsum es simplemente el texto de relleno...</p>
      </div>
    </>
  );
}
