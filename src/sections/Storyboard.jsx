import React from 'react';

function Storyboard() {
  return (
    <section className="py-16 bg-purple-100 text-gray-800"> {/* Padding vertical, fondo lila pastel */}
      <div className="container mx-auto px-4 text-center"> {/* Centrar contenido */}
        <h2 className="text-4xl font-bold mb-12">Storyboard Kawaii de Soraya: Una aventura front-end</h2> {/* Cambiado el título */}

        {/* Contenedor para los elementos del Storyboard */}
        <div className="flex flex-col items-center gap-12"> {/* Columna centrada con espacio aumentado entre elementos */}

          {/* Viñeta 1 */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
            <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya1.png" alt="Viñeta 1: ¡Hola mundo!" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">🎀 Viñeta 1: ¡Hola mundo!</h3>
              <p className="text-gray-700 text-left">
                ¡Soy Soraya! Desarrolladora Front-End apasionada por crear experiencias digitales mágicas. 📍 Desde Luanco, creando interfaces con alegría y mucho código.
              </p>
            </div>
          </div>

          {/* Viñeta 2 */}
          <div className="flex flex-col md:flex-row items-center bg-pink-100 rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
             <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya2.png" alt="Viñeta 2: Formación, el inicio" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">🧁 Viñeta 2: Formación, el inicio</h3>
              <p className="text-gray-700 text-left">
                🎓 Me formé en Desarrollo de Aplicaciones Web en CIFP Avilés. Aquí aprendí JavaScript, React, HTML, CSS y Bootstrap. ¡Fue el inicio de mi hechizo tecnológico!
              </p>
            </div>
          </div>

           {/* Viñeta 3 */}
          <div className="flex flex-col md:flex-row items-center bg-blue-100 rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
             <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya3.png" alt="Viñeta 3: Primeras prácticas" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">🍡 Viñeta 3: Primeras prácticas</h3>
              <p className="text-gray-700 text-left">
                🔰 En Visualia 360 me enfrenté a APIs, traducciones dinámicas y WordPress. ¡Mis poderes crecían entre idiomas y plugins!
              </p>
            </div>
          </div>

          {/* Viñeta 4 */}
          <div className="flex flex-col md:flex-row items-center bg-green-100 rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
            <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya4.png" alt="Viñeta 4: Misiones en DXC Technology" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">🌟 Viñeta 4: Misiones en DXC Technology</h3>
              <p className="text-gray-700 text-left">
                👩‍💻 Desde febrero a mayo 2024, desarrollé apps con React, pruebas automatizadas con Selenium y Jest, y trabajé con equipos ágiles (Scrum y Waterfall). 💚 ¡Incluso participé en un proyecto premiado de huella de carbono!
              </p>
            </div>
          </div>

          {/* Viñeta 5 */}
          <div className="flex flex-col md:flex-row items-center bg-yellow-100 rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
            <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya5.png" alt="Viñeta 5: Mi stack kawaii" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">🛠️ Viñeta 5: Mi stack kawaii</h3>
              <p className="text-gray-700 text-left">
                🧠 Mi arsenal: JavaScript (ES6+), React, Figma, GitHub, Jenkins, Selenium, pruebas unitarias y diseño UX/UI. 📈 ¡Siempre aprendiendo para subir de nivel!
              </p>
            </div>
          </div>

           {/* Viñeta 6 */}
          <div className="flex flex-col md:flex-row items-center bg-purple-100 rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
            <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya6.png" alt="Viñeta 6: Proyecto con superpoderes" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">🧑‍🚀 Viñeta 6: Proyecto con superpoderes</h3>
              <p className="text-gray-700 text-left">
                🗓️ App de calendario con React, Node.js, MongoDB: 🔗 Frontend / Backend 👾 Tecnologías utilizadas: React, Redux Toolkit, Node, Express, MongoDB Compass.
              </p>
            </div>
          </div>

          {/* Viñeta 7 y 8 (combinadas) */}
          <div className="flex flex-col md:flex-row items-center bg-blue-100 rounded-xl shadow-xl border-2 border-gray-400 overflow-hidden w-full md:w-3/4 lg:w-2/3"> {/* Contenedor de la viñeta, responsive */}
            <div className="w-full md:w-1/2"> {/* Contenedor de la imagen */}
              <img src="/images/soraya7.png" alt="Viñeta 7 y 8: Certificaciones y ¿Qué busco ahora?" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6"> {/* Contenedor del texto */}
              <h3 className="text-xl font-semibold mb-2 text-left">📚 Viñeta 7: Certificaciones mágicas</h3>
               <p className="text-gray-700 text-left mb-4"> {/* Margen inferior para separar de la siguiente viñeta */}
                🎓 Cursos que me han dado +100 puntos de experiencia: ✔️ Generative AI (AWS) ✔️ JavaScript, diseño web, IA aplicada ✔️ ¡Y muchos más!
              </p>
               <h3 className="text-xl font-semibold mb-2 text-left">🎯 Viñeta 8: ¿Qué busco ahora?</h3>
               <p className="text-gray-700 text-left">
                ✨ Busco nuevos desafíos donde pueda crear interfaces adorables, eficientes y llenas de UX/UI kawaii. 🫶 Si tu equipo cree en la magia de la tecnología, ¡conectemos!
              </p>
            </div>
          </div>

        </div> {/* Fin del contenedor de elementos del Storyboard */}

      </div>
    </section>
  );
}

export default Storyboard;