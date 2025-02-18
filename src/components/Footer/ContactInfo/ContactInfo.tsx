import { Phone, Mail, Clock } from "lucide-react";
import {
  Container,
  InfoItem,
  InfoItemContainer,
} from "../LinksSection/LinksSectionStyled";
import { Heading } from "./ContactInfoStyled";

const info: Array<[JSX.Element, string]> = [
  [<Phone strokeWidth={1} width={22} height={22} />, "+00000000"],
  [<Mail strokeWidth={1} width={22} height={22} />, "info@info.com"],
  [<Clock strokeWidth={1} width={22} height={22} />, "10:00 am - 6:00 pm"],
];

const heading = "Contact";

interface ContactInfoPropsI {
  isHeaderShown?: boolean;
}

const ContactInfo = ({ isHeaderShown }: ContactInfoPropsI) => {
  return (
    <Container>
      {isHeaderShown && <Heading>{heading}</Heading>}
      {info.map(([iconComponent, value]) => (
        <InfoItemContainer key={value}>
          {iconComponent}
          <InfoItem>{value}</InfoItem>
        </InfoItemContainer>
      ))}
    </Container>
  );
};

export default ContactInfo;
