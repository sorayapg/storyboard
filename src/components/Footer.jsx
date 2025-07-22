import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center"> {/* Ejemplo con fondo oscuro y texto blanco */}
      <div className="container mx-auto px-4">
        {/* Enlaces a redes sociales */}
        <div className="flex justify-center space-x-6 mb-4"> {/* Centra los enlaces y añade espacio entre ellos */}
          <a href="https://github.com/sorayapg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            {/* Aquí podrías poner un icono de GitHub */}
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/soraya-povedano/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            {/* Aquí podrías poner un icono de LinkedIn */}
            LinkedIn
          </a>
        </div>

        {/* Texto de derechos de autor */}
        <p>&copy; {new Date().getFullYear()} Soraya Povedano González. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;