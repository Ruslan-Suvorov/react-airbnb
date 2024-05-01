import { Heading } from "../heading";
import { Box } from "../box";
import "./index.css";
import { Fragment } from "react";

export const Review = ({ list }) => {
  return (
    <div className="review">
      <Heading>Відгуки клієнтів</Heading>
      <div className="review__content">
        {list.map(({ id, guestName, rating, review }) => (
          <Fragment key={id}>
            <Box className="review">
              <div className="review__head">
                <span className="review__name">{guestName}</span>
                <p>Peйтинг: {rating}</p>
              </div>
              <p>{review}</p>
            </Box>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
