import React from "react";

type ButtonVariant = "primary" | "secondary" | "pagination" | "active";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  ariaCurrent?: "page" | undefined;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-500 hover:bg-sky-400 text-white hover:scale-105",

  secondary:
    "bg-gray-700 hover:bg-gray-600 text-white hover:scale-105",

  pagination:
    "border border-slate-700 bg-gray-900/60 text-slate-300 hover:border-slate-500 hover:text-slate-100",

  active:
    "border-transparent bg-gradient-to-r from-purple-500 via-sky-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
  href,
  target,
  rel,
  icon,
  ariaLabel,
  ariaCurrent,
}) => {
  const classes = `rounded-lg font-medium flex justify-center items-center gap-2 transition-transform duration-300 ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-30 ${className}`;

  const content = (
    <>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        aria-current={ariaCurrent}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
