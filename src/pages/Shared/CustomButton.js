import React from "react";

const CustomButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
