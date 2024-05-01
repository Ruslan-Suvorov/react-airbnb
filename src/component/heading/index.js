import React from "react";
import "./index.css";

export const Heading = ({ children, border }) => {
  return (
    <h2 className={`heading ${border ? "heading--border" : ""}`}>{children}</h2>
  );
};
