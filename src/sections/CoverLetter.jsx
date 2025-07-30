import React from 'react';
import './CoverLetter.css'; // Mantendremos este CSS para estilos específicos si son necesarios

const CoverLetter = () => {
  const sections = [
    {
      title: 'PRESENTACIÓN PERSONAL',
      text: 'Me llamo Soraya y soy desarrolladora Front-End. Pero más allá del código, vivo el diseño como una forma de expresión. Me apasiona crear experiencias digitales que sean funcionales como hermosas, y cada interfaz que diseño lleva mi curiosidad, emoción y propósito.'
    },
    {
      title: '💻 SOBRE MIS PASIONES',
      text: 'Me encanta diseñar, programar y aprender. He creado desde aplicaciones prácticas como una App tipo calendario (CalendarApp, desarrollada con React, Node.js, MongoDB), hasta proyectos con impacto ecológico como el cálculo de huella de carbono. En cada línea de código que escribo, intento transmitir la creatividad con las manos lo que imagino con la mente.'
    },
    {
      title: '🌱 VALORES QUE DEFINEN MI TRABAJO',
      text: 'Trabajo en equipo, comunicación clara y mejora continua son esenciales para mí. Me formo en entornos ágiles, colaboro con profesionales diversos y siempre estoy buscando cómo mejorar el producto… y a mí misma. Para mí, programar es pensar en las personas.'
    },
    {
      title: '✨ MI UNIVERSO CREATIVO',
      text: 'Me inspiran los colores suaves, las formas que respiran y los diseños que cuentan historias. Utilizo Figma para dar vida a prototipos pensados desde la experiencia del usuario, y combino herramientas como HTML5, CSS3, React, Jest, Node.js y MongoDB para construir soluciones con estructura y sensibilidad visual.'
    },
    {
      title: '🌍 MI MISIÓN',
      text: 'Quiero que el desarrollo web tenga alma. Que cada proyecto sea una carta visual que diga “aquí hay alguien que se preocupa por los detalles”. Creo en la sostenibilidad, la empatía, el arte digital y en usar la tecnología para mejorar cómo vivimos y nos comunicamos.'
    },
    {
      title: '💖 DISEÑO CON ALMA',
      text: 'El desarrollo web necesita funcionalidad, seguridad y belleza. Mi misión es crear interfaces que sean intuitivas, accesibles y que transmitan emociones. Cada línea de código que escribo lleva mi pasión por el diseño y la tecnología.'
    },
    {
      title: '📬 Contacto',
      text: [
        '📧 sorayapovedano@outlook.com',
        '📞 +34 678678678',
        '🔗 LinkedIn: Soraya Povedano',
        '🐱 GitHub: https://github.com/sorayapg'
      ]
    }
  ];

  // Insertaremos la imagen en la viñeta central (índice 3 o 4, ajustaremos si es necesario)
  const imageIndex = 4; // Cambiado de 3 a 2

  return (
    <section id="cover-letter" className="py-16 bg-gray-100 text-gray-800"> {/* Ajustar fondo si quieres */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Mi Carta de Presentación Kawaii</h2> {/* Ajustar título */}

        <div className="flex flex-wrap justify-center gap-4">

          {sections.map((section, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden
                ${index === imageIndex ? 'bg-white' : 'bg-blue-100'} `} // Fondo diferente para la viñeta de la imagen
            >
              {index === imageIndex ? (
                // Viñeta con la imagen central
                <div className="w-full h-96 flex items-center justify-center"> {/* Ajustar altura y centrar contenido */}
                  <img src="/images/transparent.png" alt="Soraya Kawaii" className="h-full object-contain" /> {/* object-contain para que no se corte */}
                </div>
              ) : (
                // Viñetas con texto
                <div className="w-full p-6 flex flex-col justify-between h-full"> {/* Asegurar que el texto ocupe el espacio */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-left">{section.title}</h3>
                    {/* Renderizar el texto, manejando arrays para la sección de Contacto */}
                    {Array.isArray(section.text) ? (
                      section.text.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {/* Detectar la línea de GitHub y crear un enlace */}
                          {line.startsWith('🐱 GitHub:') ? (
                            <a href="https://github.com/sorayapg" target="_blank" rel="noopener noreferrer">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                          {lineIndex < section.text.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    ) : (
                      <p className="text-gray-700 text-left">{section.text}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CoverLetter;
