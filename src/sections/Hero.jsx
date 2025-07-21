jsx
import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-gray-800"
             style={{ backgroundColor: '#FCE7F3' }}> {/* Fondo rosa pastel ligero */}
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          ¡Hola! Soy Soraya Povedano
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Desarrolladora Front-End creativa y apasionada por el diseño.
        </p>
        {/* Aquí podrías añadir tu foto, si quieres que esté en la sección Hero */}
        {/* <img src="/images/tu-foto.jpg" alt="Soraya Povedano" className="mx-auto rounded-full w-40 h-40 object-cover mb-8" /> */}
        <p className="text-lg">
          Explora mi trabajo y descubre cómo combino la tecnología con la creatividad.
        </p>
        {/* Podríamos añadir un botón o enlace aquí que lleve a la sección de proyectos o sobre mí */}
      </div>
    </section>
  );
}

export default Hero;