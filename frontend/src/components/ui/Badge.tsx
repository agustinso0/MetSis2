import React from "react";
import type { BadgeProps } from "../../types/ui";

const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
}) => {
  const baseClasses = "inline-flex items-center font-semibold rounded-full";

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600/20 text-blue-300 border border-blue-600/30";
      case "secondary":
        return "bg-gray-600/20 text-gray-300 border border-gray-600/30";
      case "success":
        return "bg-green-600/20 text-green-300 border border-green-600/30";
      case "warning":
        return "bg-yellow-600/20 text-yellow-300 border border-yellow-600/30";
      case "danger":
        return "bg-red-600/20 text-red-300 border border-red-600/30";
      default:
        return "bg-blue-600/20 text-blue-300 border border-blue-600/30";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-2 py-1 text-xs";
      case "md":
        return "px-3 py-1.5 text-sm";
      case "lg":
        return "px-4 py-2 text-base";
      default:
        return "px-3 py-1.5 text-sm";
    }
  };

  const classes = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${
    className || ""
  }`.trim();

  return <span className={classes}>{children}</span>;
};

export default Badge;
