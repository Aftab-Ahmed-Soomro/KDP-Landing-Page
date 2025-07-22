import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick, 
  type = "button",
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#F3BD07] text-white hover:bg-[#e6b006] focus:ring-[#F3BD07]",
    secondary: "bg-[#434748] text-white hover:bg-[#2a2d2e] focus:ring-[#434748]",
    outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white focus:ring-black",
    outlineWhite: "bg-transparent border border-white text-white hover:bg-white hover:text-black focus:ring-white",
    gray: "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-700",
    transparent: "bg-transparent hover:bg-gray-700 text-white border border-gray-500 hover:border-gray-400 focus:ring-gray-700"
  };
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 md:px-6 py-3 md:py-4 text-sm md:text-base",
    lg: "px-6 md:px-8 py-3 md:py-4 text-sm md:text-base",
    xl: "px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 text-lg md:text-xl"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 