import React from "react";

// Definir interfaces hace el código más ordenado y fácil de mantener.
interface LoadingSpinnerProps {
  className?: string;
}

interface LoadingStateProps {
  title?: string;
  description?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = "" }) => {
  return (
    <div
      role="status"
      className={`animate-spin rounded-full border-2 border-current border-t-transparent w-6 h-6 text-blue-500 ${className}`}
    />
  );
};

export const LoadingState: React.FC<LoadingStateProps> = ({
  title = "Cargando...",
  description,
}) => {
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
