import React from "react";

const Section = ({ 
  children, 
  className = "", 
  padding = "default",
  background = "white",
  ...props 
}) => {
  const paddingClasses = {
    none: "",
    sm: "py-4 md:py-6",
    default: "py-8 md:py-12 lg:py-16",
    lg: "py-12 md:py-16 lg:py-24",
    xl: "py-16 md:py-24 lg:py-32"
  };
  
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    black: "bg-black text-white",
    primary: "bg-[#F3BD07]",
    secondary: "bg-[#434748] text-white",
    gradient: "bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400"
  };
  
  const classes = `${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`;
  
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

export default Section; 