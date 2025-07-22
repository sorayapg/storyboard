/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFB6C1', // Un tono de rosa pastel
        'pastel-purple': '#E6E6FA', // Un tono de lila pastel
        'pastel-blue': '#ADD8E6', // Un tono de azul claro pastel
        // Puedes añadir más tonos o ajustar estos códigos hexadecimales
      },
    },
  },
  plugins: [],
}
