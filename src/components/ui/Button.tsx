import Link from "next/link";

interface ButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "light";
  link?: string;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export default function Button({
  text,
  size = "md",
  variant = "primary",
  link,
  className = "",
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-hover hover:shadow-lg transition-all duration-300",
    secondary:
      "border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-300",
    light:
      "bg-white text-foreground font-semibold rounded-md hover:bg-surface-2 transition-all duration-300",
    ghost: "text-muted hover:text-foreground transition-colors duration-300",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonClass = `inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (link) {
    return (
      <Link href={link} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
