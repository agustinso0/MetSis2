import React from "react";
import type { CardProps } from "../../types/ui";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  padding = "md",
}) => {
  // Estilos base
  let classes = "bg-gray-800 border border-gray-700 rounded-lg shadow-lg";

  // Agrega efecto hover si es necesario
  if (hover) {
    classes +=
      " hover:border-gray-600 hover:shadow-xl transition-all duration-200 cursor-pointer";
  }

  // Agregar padding
  if (padding === "sm") {
    classes += " p-4";
  } else if (padding === "md") {
    classes += " p-6";
  } else if (padding === "lg") {
    classes += " p-8";
  }
  // Si padding es "none", no agregamos padding

  if (className) classes += " " + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
