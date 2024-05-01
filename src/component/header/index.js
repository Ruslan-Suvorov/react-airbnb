import React from "react";
import "./index.css";
import logo from "./logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} height={32} />
    </header>
  );
};
