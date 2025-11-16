import React from "react";

export interface BaseUIProps {
  className?: string;
  children?: React.ReactNode;
}

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
  padding?: "none" | "sm" | "md" | "lg"; // control del espaciado interno
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseUIProps {
  label?: string;
  error?: string;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseUIProps {
  label?: string;
  error?: string;
}

export interface BadgeProps extends BaseUIProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export interface ErrorStateProps {
  title?: string;
  description?: string;
  error?: string;
  onRetry?: () => void;
  retryText?: string;
}

export interface LayoutProps extends BaseUIProps {
  title?: string;
}
