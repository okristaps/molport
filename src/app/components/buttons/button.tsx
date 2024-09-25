import React from "react";

interface PrimaryButtonProps {
  onClick: () => void;
  label: string;
  variant?: "success" | "warning" | "danger" | "primary";
  fontSize?: "text-sm" | "text-base" | "text-lg" | "text-xl";
  className?: string;
}

export default function PrimaryButton({
  onClick,
  label,
  variant = "primary",
  fontSize = "text-base",
  className = "",
}: PrimaryButtonProps) {
  const getButtonClassNames = () => {
    switch (variant) {
      case "success":
        return "bg-successMedium text-white hover:bg-successDark";
      case "warning":
        return "bg-warningMedium text-white hover:bg-warningDark";
      case "danger":
        return "bg-dangerMedium text-white hover:bg-dangerDark";
      case "primary":
      default:
        return "bg-blue-500 text-white hover:bg-blue-600";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonClassNames()} ${fontSize} p-8 rounded transition duration-200 ${className}`}
    >
      {label}
    </button>
  );
}
