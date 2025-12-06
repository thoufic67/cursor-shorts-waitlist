"use client"
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-gray-800 focus:ring-brand-black shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    blue: "bg-brand-blue text-white hover:bg-brand-darkBlue focus:ring-brand-blue shadow-md hover:shadow-lg",
    secondary: "bg-white text-brand-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
    ghost: "text-brand-black hover:bg-gray-100"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;