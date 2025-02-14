// frontend/src/app/api/user/route.js
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email'); // Obtener el email desde los parámetros de búsqueda
    
    if (!email) {
      return new Response('Email requerido', { status: 400 });
    }
  
    try {
      // Realizamos la solicitud al backend para obtener los roles
      const response = await fetch(`${process.env.BACKEND_URL}/api/user/roles/${email}`);
      const data = await response.json();
  
      if (response.ok) {
        return new Response(JSON.stringify({ roles: data.roles }), { status: 200 });
      } else {
        return new Response('Error al obtener roles', { status: 400 });
      }
    } catch (error) {
      return new Response('Error del servidor', { status: 500 });
    }
  }
  