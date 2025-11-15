import React from "react";

// Spinner basico que gira - se puede usar en cualquier lado
const LoadingSpinner: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-2 border-blue-500 border-t-transparent w-6 h-6 ${className}`}
    />
  );
};

// Version mas completa con titulo y descripcion
export const LoadingState: React.FC<{
  title?: string;
  description?: string;
}> = ({ title = "Cargando...", description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <LoadingSpinner className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-gray-400 text-center max-w-md">{description}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
