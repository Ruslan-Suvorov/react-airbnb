import "./index.css";
import { Box } from "../box";
import { Heading } from "../heading";
import { ListItem } from "../list-item";

export const Additional = ({ data }) => {
  return (
    <Box shadow className="additional">
      <Heading border>Додаткові властивості</Heading>
      <ListItem title="Правила дому">{data.house_rules}</ListItem>
      <ListItem title="Політика скасування">
        {data.cancellation_policy}
      </ListItem>
      <ListItem title="Місцевий транспорт">
        {data.local_transportation}
      </ListItem>
      <ListItem title="Мови хоста">
        {data.host_languages.map((e) => `${e},  `)}
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">{data.special_offers}</ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        {data.checkin_instructions}
      </ListItem>
    </Box>
  );
};
