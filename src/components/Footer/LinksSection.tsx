import type { IconNamesT } from "../../utils/types";
import LinkColumn from "./LinkColumn";
import {
  Container,
  FooterLink,
  ProfileParagraph,
  InfoItem,
  InfoItemContainer,
} from "./LinksSectionStyled";
import Icon from "../Icon/Icon";

export interface LinkGroupI {
  heading: string;
  links: Array<{ name: string; route: string }>;
  isTag: boolean;
}

type LinkGroupsT = Array<LinkGroupI>;

interface LinkSectionPropsI {
  linkGroups: LinkGroupsT;
}

interface ContactI {
  name: string;
  info: Array<[IconNamesT, string]>;
}

const LinksSection = ({ linkGroups }: LinkSectionPropsI): JSX.Element => {
  const profile = {
    name: "profile",
    paragraph:
      "PineBeauty is an online shop that specialises in Serbian natural and organic beauty & wellness products.",
  };

  const contact: ContactI = {
    name: "contact",
    info: [
      ["phone", "+00000000"],
      ["email", "info@info.com"],
      ["clock", "10:00 am - 6:00 pm"],
    ],
  };

  return (
    <Container>
      <div>
        <LinkColumn heading={profile.name}>
          <ProfileParagraph>{profile.paragraph}</ProfileParagraph>
        </LinkColumn>
        <LinkColumn heading={contact.name}>
          {contact.info.map(([icon, value]) => (
            <InfoItemContainer>
              <Icon name={icon} width="16px" height="16px" />
              <InfoItem>{value}</InfoItem>
            </InfoItemContainer>
          ))}
        </LinkColumn>
      </div>
      {linkGroups.map((l) => (
        <LinkColumn heading={l.heading} key={l.heading}>
          {l.links.map((link) => (
            <FooterLink isTag={l.isTag} to={link.route} key={link.name}>
              {link.name}
            </FooterLink>
          ))}
        </LinkColumn>
      ))}
    </Container>
  );
};

export default LinksSection;
