import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) => {
  return (
    <button
      className="rounded-full bg-white hover:bg-zinc-200 text-zinc-900 transition-colors duration-500 px-4 py-1 text-sm leading-snug"
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
