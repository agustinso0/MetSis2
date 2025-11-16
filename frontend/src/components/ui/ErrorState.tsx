import React from "react";
import Button from "./Button";
import type { ErrorStateProps } from "../../types/ui";

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Ha ocurrido un error",
  description,
  error,
  onRetry,
  retryText = "Reintentar",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-red-600/20 rounded-full mb-6 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {description && (
        <p className="text-gray-400 mb-4 max-w-md">{description}</p>
      )}

      {/* Mostrar detalles tecnicos del error si vienen */}
      {error && (
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-6 max-w-md w-full">
          <p className="text-red-300 font-medium mb-1">Detalles del error:</p>
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          {retryText}
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
