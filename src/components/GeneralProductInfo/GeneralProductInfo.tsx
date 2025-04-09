import {
  ColumnList,
  Container,
  HorizontalList,
  ListItem,
  ListItem2,
  ListTitle,
} from "./GeneralProductInfoStyled";

const listData = [
  "Ordered before 3:00 PM on working days, shipped the same day",
  "Customers give us a 9.7",
  "Free delivery above €40",
  "30 days' reflection period",
];

const list2Title = "PineBeauty is always:";
const list2 = [
  "Alcohol free",
  "Cruelty free",
  "Vegan",
  "Paraben-free",
  "Silicone-free",
  "100% natural",
  "100% pure",
  "Without preservatives",
];

const GeneralProductInfo = function () {
  return (
    <Container>
      <ColumnList>
        {listData.map((i) => (
          <ListItem>✔{" " + i}</ListItem>
        ))}
      </ColumnList>
      <div>
        <ListTitle>{list2Title}</ListTitle>
        <HorizontalList>
          {list2.map((i) => (
            <ListItem2>✔{" " + i}</ListItem2>
          ))}
        </HorizontalList>
      </div>
    </Container>
  );
};

export default GeneralProductInfo;
