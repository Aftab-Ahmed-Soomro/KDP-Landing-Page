import React from "react";

const Grid = ({ 
  children, 
  className = "", 
  cols = 1,
  gap = "default",
  ...props 
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
  };
  
  const gapClasses = {
    none: "",
    sm: "gap-2 md:gap-3",
    default: "gap-4 md:gap-6 lg:gap-8",
    lg: "gap-6 md:gap-8 lg:gap-12",
    xl: "gap-8 md:gap-12 lg:gap-16"
  };
  
  const classes = `grid ${gridCols[cols]} ${gapClasses[gap]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid; 