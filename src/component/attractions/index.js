import React from "react";
import { Fragment } from "react";
import { Box } from "../box";
import { Heading } from "../heading";
import { ListItem } from "../list-item";
import "./index.css";

export const Attractions = ({ list }) => {
  return (
    <Box shadow className="attractions">
      <Heading>Пам'ятки поблизу</Heading>
      {list.map(({ id, name, link }) => (
        <Fragment key={id}>
          <ListItem>
            <a href={`http://${link}`} target="_blank">
              {name}
            </a>
          </ListItem>
        </Fragment>
      ))}
    </Box>
  );
};
