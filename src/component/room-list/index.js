import React from "react";
import { Fragment } from "react";
import "./index.css";
import { Box } from "../box";
import { Heading } from "../heading";

export const RoomList = ({ list, title }) => {
  return (
    <div className="room-list">
      <Heading>{title}</Heading>
      <div className="room-list__content">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Room {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const Room = ({ type, capacity, currency, pricePerNight: price }) => {
  return (
    <Box className="room">
      <h3 className="room__title">{type}</h3>
      <p className="room__info">Кількість гостей: {capacity}</p>
      <span className="room__price">
        {currency} {price}
      </span>
    </Box>
  );
};
