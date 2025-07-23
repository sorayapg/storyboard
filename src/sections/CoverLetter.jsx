import React, { useState } from 'react';

function CoverLetter() {
  const [modalAbierta, setModalAbierta] = useState(false);

  const abrirModal = () => setModalAbierta(true);
  const cerrarModal = () => setModalAbierta(false);

  const textoResumido = "Un breve resumen de mi carta de presentación..."; // Puedes escribir aquí el texto resumido

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Carta de Presentación</h2>

        <div className="flex justify-center">
          <img
            src="/images/Carta de presentación.png"
            alt="Carta de Presentación"
            className="mx-auto w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" // Eliminadas md:w-1/2 y lg:w-1/3
            onClick={abrirModal}
          />
        </div>

        {modalAbierta && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={cerrarModal} // cerrar modal clic fondo
          >
            <div
              className="bg-white p-6 rounded-lg shadow-xl max-w-2xl max-h-full overflow-y-auto relative"
              onClick={e => e.stopPropagation()} // evitar cerrar al hacer clic dentro
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
                onClick={cerrarModal}
                aria-label="Cerrar modal"
              >
                &times;
              </button>

              <img
                src="/images/Carta de presentación.png"
                alt="Carta de Presentación ampliada"
                className="w-full h-auto object-contain mb-4 rounded-lg"
              />
              <p className="text-gray-700 text-left">
                {textoResumido}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CoverLetter;
