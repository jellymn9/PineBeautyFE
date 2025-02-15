import { IconNamesT } from "../../../utils/types";
import Icon from "../../Icon/Icon";
import { Container, InfoItem, InfoItemContainer } from "../LinksSectionStyled";

const info: Array<[IconNamesT, string]> = [
  ["phone", "+00000000"],
  ["email", "info@info.com"],
  ["clock", "10:00 am - 6:00 pm"],
];

const ContactInfo = () => {
  return (
    <Container>
      {info.map(([icon, value]) => (
        <InfoItemContainer>
          <Icon name={icon} width="16px" height="16px" />
          <InfoItem>{value}</InfoItem>
        </InfoItemContainer>
      ))}
    </Container>
  );
};

export default ContactInfo;
