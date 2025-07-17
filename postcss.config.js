import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss('./tailwind.config.js'), // Explicitly pass the tailwind config file
    autoprefixer,
  ],
};