// app/sign-in/page.tsx (o en pages/sign-in.tsx si usas la estructura antigua de Next.js)

import { SignIn, SignUp } from '@clerk/nextjs'

export default function AuthPage() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondo oscuro sobre el fondo de imagen */}
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a la aplicación</h1>
          <p className="text-lg">Inicia sesión o regístrate para continuar</p>
        </div>
        
        {/* Formulario de SignIn y SignUp */}
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <SignIn fallbackRedirectUrl="/reporte-de-hora" signUpFallbackRedirectUrl="/onboarding" />
          <SignUp fallbackRedirectUrl="/reporte-de-hora" signInFallbackRedirectUrl="/onboarding" />
        </div>
      </div>
    </div>
  )
}
