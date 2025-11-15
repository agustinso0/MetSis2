import React from "react";
import type { ButtonProps } from "../../types/ui";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  children,
  disabled,
  ...props
}) => {
  // Estilos que siempre van a estar presentes
  let classes =
    "px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50";

  // Cambiar colores segun el tipo de boton 
  if (variant === "primary") {
    classes += " bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "secondary") {
    classes += " bg-gray-700 text-white hover:bg-gray-600";
  } else if (variant === "danger") {
    classes += " bg-red-600 text-white hover:bg-red-700";
  } else if (variant === "outline") {
    classes += " border border-gray-600 text-gray-300 hover:bg-gray-700";
  }

  // Diferentes tamanos 
  if (size === "sm") {
    classes += " px-3 py-1 text-sm";
  } else if (size === "lg") {
    classes += " px-6 py-3 text-lg";
  }

  // Si viene alguna clase extra desde fuera, la agregamos
  if (className) {
    classes += " " + className;
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
