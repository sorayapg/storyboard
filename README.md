# Portafolio de Proyectos

¡Bienvenido/a a mi portafolio de proyectos!

Este portafolio exhibe una selección de mis trabajos y habilidades como desarrollador/a. Aquí encontrarás información sobre mis proyectos, experiencia y formación.

## Tecnologías Utilizadas

Este proyecto ha sido construido utilizando las siguientes tecnologías:

*   **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
*   **Vite:** Un entorno de desarrollo frontend de nueva generación.
*   **Tailwind CSS:** Un framework de CSS de utilidad para estilizar rápidamente.
*   **Heroicons:** Un conjunto de iconos SVG diseñados para ser utilizados con Tailwind CSS (utilizado a través de `@heroicons/react` para componentes de React).

## Preparación del Entorno e Instalación

Para configurar y ejecutar este proyecto localmente, sigue los pasos a continuación:

1.  **Clonar el repositorio:** Si aún no lo has hecho, clona el repositorio del proyecto desde su ubicación (por ejemplo, GitHub).
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  **Navegar al directorio del proyecto:**
    ```bash
    cd <NOMBRE_DEL_DIRectorio>
    ```
3.  **Instalar dependencias:** Utiliza npm o yarn para instalar las dependencias del proyecto.
    ```bash
    npm install
    # o
    yarn install
    ```
    Esto instalará todas las librerías necesarias, incluyendo React, Vite, Tailwind CSS y Heroicons.
4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    Esto iniciará un servidor local y abrirá el portafolio en tu navegador predeterminado. El servidor se recargará automáticamente con los cambios que hagas en el código.

## Tareas Pendientes:

- [ ] Ajustar el diseño del storyboard a la paleta de colores pastel.
- [x] Añadir la carta de presentación.
- [x] Añadir los enlaces en el footer.
- [ ] Revisar y mejorar la sección "About".
- [ ] Implementar animaciones sutiles en la navegación.
- [ ] Optimizar las imágenes para mejorar el rendimiento.
- [ ] Crear un formulario de contacto funcional.
- [ ] Asegurar la responsividad en diferentes dispositivos (ya empezamos con ello pero falta revisarlo).
- [ ] Desplegar el portafolio en un servicio de hosting (por ejemplo, Netlify o Vercel).
- [ ] Configurar un dominio personalizado (opcional).
- [ ] Añadir testimonios o sección de "lo que dicen de mi" (opcional).
- [ ] Integrar herramientas de análisis (por ejemplo, Google Analytics).
- [ ] Mejorar la accesibilidad (considerar WCAG).

---

**¿Se podría publicar este portafolio con Firebase?**

Sí, **definitivamente puedes publicar este portafolio con Firebase Hosting**. Firebase Hosting es una excelente opción para desplegar sitios web estáticos como este portafolio creado con React y Vite. Es rápido, seguro y gratuito para muchos casos de uso.

El proceso general implicaría:

1.  Instalar las herramientas de línea de comandos de Firebase (`firebase-tools`).
2.  Iniciar sesión en tu cuenta de Firebase.
3.  Inicializar Firebase en tu proyecto (configurando Hosting).
4.  Construir tu aplicación React para producción (`npm run build` o `yarn build`).
5.  Desplegar la carpeta de construcción (`dist` por defecto con Vite) a Firebase Hosting.

Es un proceso bastante sencillo y bien documentado por Firebase.