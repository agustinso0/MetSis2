import React from "react";
import type { InputProps } from "../../types/ui";

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  // Estilos base
  let inputClasses =
    "w-full px-4 py-2 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

  // Agregar estilos de error
  if (error) {
    inputClasses += " border-red-500";
  } else {
    inputClasses += " border-gray-600";
  }

  // Agregar clases personalizadas
  if (className) {
    inputClasses += " " + className;
  }

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
