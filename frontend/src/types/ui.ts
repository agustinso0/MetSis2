import React from "react";

// Propiedades base que comparten todos los componentes de UI
// Para tener consistencia en className y children en toda la app
export interface BaseUIProps {
  className?: string;
  children?: React.ReactNode;
}

// Configuracion completa para botones con todas las variantes visuales
// Los size y variant dan flexibilidad sin duplicar codigo
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean; // para mostrar estado de carga automaticamente
  children: React.ReactNode;
}

// Propiedades para tarjetas con opciones de hover y padding
// El hover para casos donde queremos feedback visual
export interface CardProps extends BaseUIProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean; // para efectos de hover opcionales
  padding?: "none" | "sm" | "md" | "lg"; // control granular del espaciado interno
}

// Input con label y error integrados - evita repetir markup
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseUIProps {
  label?: string;
  error?: string; // mensaje de error que se muestra automaticamente
}

// Textarea que sigue el mismo patron que Input
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseUIProps {
  label?: string;
  error?: string;
}

// Badge con variantes de color segun el contexto
// Los variants para comunicar estados sin pensar en colores especificos
export interface BadgeProps extends BaseUIProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

// Estado de error completo con retry automatico
// Para manejar errores de forma consistente en toda la app
export interface ErrorStateProps extends BaseUIProps {
  title?: string;
  description?: string;
  error?: string; // error tecnico detallado
  onRetry?: () => void; // funcion para reintentar la operacion
  retryText?: string;
}

// Layout principal con opciones de navegacion
export interface LayoutProps extends BaseUIProps {
  title?: string;
  hideNavigation?: boolean; // para paginas especiales sin menu
  hideSidebar?: boolean; // para vistas fullscreen
}
