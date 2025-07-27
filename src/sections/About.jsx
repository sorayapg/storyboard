import React from 'react';

function About() {
  return (
    <section className="py-16 bg-white text-gray-800"> {/* Padding vertical, fondo blanco, texto oscuro */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre Mí</h2>

        {/* Contenedor de la imagen (arriba) */}
        <div className="text-center mb-8"> {/* Centramos la imagen y añadimos margen inferior */}
           <img src="/images/Soraya.png" alt="Soraya Povedano" className="mx-auto rounded-full w-40 h-40 object-cover" />
        </div>

        {/* Contenedor del texto (abajo) */}
        <div className="text-left"> {/* Eliminamos max-w-md y mx-auto, mantenemos text-left */}
          <p className="text-lg mb-4">
            Soy Desarrolladora Front-End Junior con experiencia en la creación de interfaces de usuario interactivas y responsivas utilizando tecnologías como React, JavaScript, HTML5, CSS3 y Jest. Mi enfoque se centra en construir soluciones eficientes, bien estructuradas y visualmente atractivas, siempre con una fuerte atención al detalle y una pasión por el diseño web y la experiencia de usuario (UX/UI).
          </p>
          <p className="text-lg mb-4">
            He trabajado en proyectos para clientes de alto perfil como CaixaBank, aplicando metodologías ágiles como Scrum. Tuve la oportunidad de participar en un proyecto galardonado de cálculo y reducción de huella de carbono, lo que me permitió combinar el desarrollo web con la sostenibilidad, aportando soluciones tecnológicas con impacto real.
          </p>
          <p className="text-lg">
            Busco un entorno dinámico donde seguir creciendo y aportar valor a través de mi capacidad de aprendizaje continuo y trabajo en equipo. También he desarrollado una aplicación completa tipo calendario, AppCalendar, utilizando React, Node.js y MongoDB, que refleja mi compromiso con la creación de soluciones funcionales y estéticas.
          </p>
          {/* Botón para descargar el CV */}
          <a
            href="/documents/cv-soraya-povedano-gallardo.pdf"
            download="Curriculum Vitae Soraya Povedano.pdf"
            className="mt-4 inline-block bg-pink-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-pink-600 transition duration-300"
          >
            Descargar CV
          </a>
        </div>

        {/* Nueva sección de Habilidades (esta se mantiene igual) */}
        <div className="mt-12"> {/* Margen superior */}
          <h3 className="text-2xl font-bold text-center mb-6">Habilidades Técnicas</h3>
          <div className="flex flex-wrap justify-center gap-4"> {/* Flex container para los badges, centrado y con espacio entre ellos */}
            {/* Lista de Habilidades como badges */}
            <span className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
            <span className="bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">HTML5</span>
            <span className="bg-purple-200 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">CSS3</span>
            <span className="bg-red-200 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Jest</span>
            <span className="bg-indigo-200 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-pink-200 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Scrum</span>
            <span className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Waterfall</span>
            <span className="bg-teal-200 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">Figma</span>
            <span className="bg-orange-200 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">CI/CD</span>
            <span className="bg-blue-300 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Git/GitHub</span>
            {/* Puedes añadir más habilidades según lo necesites */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
