import React from "react";
import { Heading } from "../heading";
import "./index.css";

export const Contact = ({ data }) => {
  return (
    <div className="contact">
      <div className="contact__frame">
        <img src={data.image} className="contact__img" alt="photo" />
        <div className="contact">
          <Heading>{data.name}</Heading>
          <div className="contact__sub">
            <span className="contact__sub-value">{data.phone}</span>
            <span className="contact__sub-value">{data.response_time}</span>
            <span className="contact__sub-value">
              {data.response_rate} відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p>{data.info}</p>
    </div>
  );
};
