import React from "react";
import type { TextareaProps } from "../../types/ui";

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  let textareaClasses =
    "w-full px-4 py-2 bg-gray-900 border rounded-lg text-white placeholder-gray-500 resize-vertical min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";

  // Agregar estilos de error
  if (error) {
    textareaClasses +=
      " border-red-500 focus:ring-red-500 focus:border-red-500";
  } else {
    textareaClasses += " border-gray-600";
  }

  // Agregar clases personalizadas
  if (className) {
    textareaClasses += " " + className;
  }

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <textarea className={textareaClasses} {...props} />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Textarea;
