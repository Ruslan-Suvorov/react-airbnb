import "./index.css";
import { Box } from "../box";
import { ListItem } from "../list-item";

export const Price = ({ price, currency, discount, ...rest }) => {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${discount ? "price__value--discount" : ""}`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>
      <List {...rest} currency={currency} />
    </Box>
  );
};

const List = ({ currency, cleaning, service, checkin, checkout }) => {
  return (
    <ul className="price__list">
      <ListItem>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>
      <ListItem>
        <span>Плата за обслуговування:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>
      <ListItem>
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </ListItem>
      <ListItem>
        <span>Дата виїзду:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
};
