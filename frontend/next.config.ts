import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Activar el modo estricto de React (opcional)
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Coincide con rutas como /api/* en tu frontend
        destination: 'http://localhost:5000/api/:path*',  // Redirige a tu backend en el puerto 5000
      },
    ];
  },
};

export default nextConfig;
