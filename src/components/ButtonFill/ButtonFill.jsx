import React from "react";

const ButtonFill = ({ children }) => {
  return (
    <button
      className="bg-resik-primary text-white rounded-full shadow-sm hover:bg-resik-secondary
      hover:shadow-resik-secondary transition-all
    shadow-resik-primary font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
      href="#section1"
    >
      {children}
    </button>
  );
};

export default ButtonFill;
