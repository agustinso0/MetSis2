import type { Config } from "tailwindcss";

// Configuracion de Tailwind CSS - esto nos define todos los estilos y temas personalizados del proyecto
export default {
  content: [
    // Archivos donde Tailwind va a buscar clases CSS - esto nos asegura que solo incluya estilos que realmente usamos
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores primarios azules - esto nos da la paleta principal del sitio de noticias
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // color principal - el azul que mas usamos
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // Colores secundarios amarillos - para destacar elementos importantes
        secondary: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308", // amarillo principal - para badges y alertas
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
        // Colores oscuros para modo dark y textos - paleta completa de grises
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b", // gris medio - perfecto para textos secundarios
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          850: "#1a202c", // color custom - gris extra para fondos
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        // Fuentes del proyecto - Inter queda muy bien para noticias
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ], // Fuente principal - Inter es re legible
        heading: ["Inter", "system-ui", "sans-serif"], // Para titulos - por ahora igual pero separada por si despues queremos cambiar
      },
      fontSize: {
        // Tamaños de texto personalizados - mas control sobre la tipografia
        xs: ["0.75rem", { lineHeight: "1rem" }], // texto muy pequeño - para metadatos
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // texto pequeño - para descripciones
        base: ["1rem", { lineHeight: "1.5rem" }], // texto normal - para contenido principal
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // texto grande - para subtitulos
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // titulos pequeños - para cards
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // titulos medianos - para secciones
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // titulos grandes - para paginas principales
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // titulos muy grandes - para hero sections
        "5xl": ["3rem", { lineHeight: "1" }], // titulos enormes - para landing pages
        "6xl": ["3.75rem", { lineHeight: "1" }], // titulos gigantes - para impacto visual
      },
      spacing: {
        // Espaciados extras que no vienen por defecto - mas opciones para el diseño
        "18": "4.5rem", // 72px - espacios medianos entre secciones
        "22": "5.5rem", // 88px - para separaciones mas grandes
        "26": "6.5rem", // 104px - para headers o footers altos
        "30": "7.5rem", // 120px - para espacios muy grandes entre bloques
      },
      animation: {
        // Animaciones personalizadas - efectos suaves para mejorar la UX
        "fade-in": "fadeIn 0.5s ease-in-out", // aparicion suave - para cuando cargan elementos
        "slide-up": "slideUp 0.3s ease-out", // deslizar hacia arriba - para modales y tooltips
        "pulse-slow": "pulse 3s infinite", // pulso lento - para indicadores de carga
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" }, // arranca invisible
          "100%": { opacity: "1" }, // termina visible - efecto fade suave
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" }, // arranca abajo
          "100%": { transform: "translateY(0)", opacity: "1" }, // sube a su lugar - queda copado para modales
        },
      },
      backdropBlur: {
        xs: "2px", // difuminado extra suave - para overlays muy sutiles
      },
    },
  },
  plugins: [], // no usamos plugins extra - mantiene el bundle chico
} satisfies Config;
