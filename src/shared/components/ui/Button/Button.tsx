import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary" | "tertiary"; 
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  variant?: ButtonVariant; 
  size?: ButtonSize; icon?: 
  ReactNode; iconPosition?: "left" | "right"; 
}

export function Button({
  children,
  size = "md",
  icon,
  iconPosition = "left",
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = [ 
    styles.button, 
    styles[variant], 
    styles[size], className, ]

  .filter(Boolean) 
  .join(" ");

  return ( 
    <button 
      className={buttonClassName} 
      {...props}
    > 
      {icon && iconPosition === "left" && icon} 
      <span>
        {children}
      </span> 
      {icon && iconPosition === "right" && icon} 
    </button> );
}