import { Truck, Repeat, Squirrel } from "lucide-react";

import {
  Container,
  Description,
  InfoContainer,
  TileAndDescContainer,
  Title,
} from "./InfoHomeStyled";

const iconSize = 36;
const strokeWidth = 2;
const infoData = [
  {
    heading: "returns",
    icon: <Repeat size={iconSize} strokeWidth={strokeWidth} />,
    description: "Orders can be returned within 30 days without any problem.",
  },
  {
    heading: "free shipping",
    icon: <Truck size={iconSize} strokeWidth={strokeWidth} />,
    description:
      "For orders <b>from 40 euros </b> we charge <b>no shipping costs </b>.",
  },
  {
    heading: "Cruelty free cosmetica",
    icon: <Squirrel size={iconSize} strokeWidth={strokeWidth} />,
    description: `With us you can shop <b> cruelty free </b> cosmetics.`,
  },
];

const InfoHome = () => {
  return (
    <Container>
      {infoData.map(({ heading, icon, description }) => {
        return (
          <InfoContainer key={heading}>
            {icon}
            <TileAndDescContainer>
              <Title>{heading}</Title>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
            </TileAndDescContainer>
          </InfoContainer>
        );
      })}
    </Container>
  );
};

export default InfoHome;
