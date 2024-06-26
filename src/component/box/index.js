import React from "react";
import "./index.css";

export const Box = ({ children, className, shadow }) => {
  return (
    <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
      {children}
    </div>
  );
};
