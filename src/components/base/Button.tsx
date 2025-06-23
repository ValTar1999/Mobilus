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
      className="rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-4 py-1 text-sm leading-snug"
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
