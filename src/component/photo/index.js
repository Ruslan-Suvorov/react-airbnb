import React from "react";
import "./index.css";

export const Photo = ({ src, text }) => {
  return <img src={src} alt={text} className="photo" />;
};
