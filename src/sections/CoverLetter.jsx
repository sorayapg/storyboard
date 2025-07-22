import React from 'react';

function CoverLetter() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800"> {/* Ejemplo con fondo gris */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Carta de Presentación</h2>
        <div className="prose lg:prose-xl mx-auto">
          <p>
            Me llamo Soraya y soy desarrolladora Front-End. Pero más allá del código, vivo el diseño como una forma de expresión. Me apasiona crear experiencias digitales que sean tan funcionales como hermosas, y cada interfaz que diseño lleva algo de mí: curiosidad, emoción y propósito.
          </p>
          <p>
            Me encanta diseñar, programar y aprender. He creado desde aplicaciones prácticas como una App tipo calendario, que puedes visitar aquí:
            <br /> {/* Salto de línea para el enlace */}
            🔗 <a href="https://calendar-app-backend-pro.up.railway.app/auth/login" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CalendarApp</a>
            , desarrollada en React, Node.js y MongoDB, hasta proyectos con impacto ecológico como el cálculo de huella de carbono.
            En cada línea de código hay compromiso, detalle y creatividad: creo con las manos lo que imagino con la mente.
          </p>
          <p>
            Trabajo en equipo, comunicación clara y mejora continua son esenciales para mí.
            Me formé en entornos ágiles, colaboré con profesionales diversos y siempre estoy buscando cómo mejorar el producto... y a mí misma.
            Para mí, programar es pensar en las personas.
          </p>
          <p>
            Quiero que el desarrollo web tenga alma. Que cada proyecto sea una carta visual que diga “aquí hay alguien que se preocupa por los detalles”.
            Creo en la sostenibilidad, la empatía, el arte digital y en usar la tecnología para mejorar cómo vivimos y nos comunicamos.
          </p>
          <p>
            El desarrollo web necesita funcionalidad, seguridad y experiencia de usuario.
            Pero sin diseño, la tecnología no emociona.
            La creatividad da vida a lo digital — porque lo que conecta, también se diseña.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoverLetter;