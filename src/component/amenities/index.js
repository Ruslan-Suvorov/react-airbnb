import React from "react";
import "./index.css";
import { Box } from "../box";
import { ListItem } from "../list-item";
import { Heading } from "../heading";
import pool from "./svg/pool.svg";
import gym from "./svg/gym.svg";
import breakfast from "./svg/breakfast.svg";
import wifi from "./svg/wifi.svg";
import parking from "./svg/parking.svg";
import pets from "./svg/pets.svg";
import airport from "./svg/airport.svg";
import consierge from "./svg/consierge.svg";
import service from "./svg/service.svg";
import child from "./svg/child.svg";

export const Amenities = ({ data }) => {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>
      {data.hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
      {data.hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
      {data.hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem>
      )}
      {data.hasFreeWiFi && (
        <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>
      )}
      {data.hasParking && (
        <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {data.hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {data.hasAirportShuttle && (
        <ListItem imageSrc={airport}>Трансфер до/з аеропорту</ListItem>
      )}
      {data.hasConciergeService && (
        <ListItem imageSrc={consierge}>Консьєрж-сервіс</ListItem>
      )}
      {data.hasRoomService && (
        <ListItem imageSrc={service}>Обслуговування номерів</ListItem>
      )}
      {data.hasChildFriendly && (
        <ListItem imageSrc={child}>Підходить для дітей</ListItem>
      )}
    </Box>
  );
};
