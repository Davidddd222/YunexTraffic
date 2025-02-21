// src/app/auth/sign-up/[[...rest]]/page.tsx
import { SignUp } from '@clerk/nextjs';


export default function SignUpPage() {
  return (
    <div
      className="flex flex-col lg:flex-row min-h-screen w-full overflow-auto" // Asegura que el contenedor ocupe toda la pantalla y maneje el desbordamiento
      style={{
        background: 'linear-gradient(0deg, rgba(34,110,195,1) 17%, rgba(140,180,224,1) 40%, rgba(255,255,255,1) 80%)',
        backgroundSize: 'cover', // Asegura que el fondo cubra toda el área
      }}
    >
      {/* Sección de letras */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 lg:p-8 lg:pr-2">
        <h1 className="text-4xl lg:text-6xl font-semibold break-words">
          ¡Uniting what’s <br /> next in traffic!
        </h1>
        <p className="text-xl lg:text-2xl font-medium mt-4">We launch cities into the future.</p>
        <p className="text-base lg:text-lg mt-4">
          Yunex Traffic develops innovative mobility ecosystems and services for <br className="hidden lg:block" />
          the smart city making mobility safer, more efficient, and more sustainable <br className="hidden lg:block" />
          with forward-looking infrastructure and transport solutions.
        </p>
      </div>

      {/* Sección de registro */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-4 lg:p-8 lg:pl-2">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Registrar cuenta</h1>
          <SignUp routing="hash" />
        </div>
      </div>
    </div>

  );
}
