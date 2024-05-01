import React from "react";
import "./index.css";
import { Heading } from "../heading";

export const Description = ({ title, text }) => {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p>{text}</p>
    </div>
  );
};
