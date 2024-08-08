import LinkColumn from "./LinkColumn";
import { Container, FooterLink } from "./LinksSectionStyled";
import ClockSVG from "../../assets/clock.svg?react";
import EmailSVG from "../../assets/email.svg?react";
import PhoneSVG from "../../assets/phone.svg?react";

export interface LinkGroupI {
  heading: string;
  links: Array<{ name: string; route: string }>;
  isTag: boolean;
}

type LinkGroupsT = Array<LinkGroupI>;

interface LinkSectionPropsI {
  linkGroups: LinkGroupsT;
}

const LinksSection = ({ linkGroups }: LinkSectionPropsI): JSX.Element => {
  const profile = {
    name: "profile",
    paragraph:
      "PineBeauty is an online shop that specialises in Serbian natural and organic beauty & wellness products.",
  };

  const contact = {
    name: "contact",
    info: {
      phone: "+00000000",
      email: "info@info.com",
      workingHours: "10:00 am - 6:00 pm",
    },
  };

  return (
    <Container>
      <div>
        <LinkColumn heading={profile.name}>
          <div>{profile.paragraph}</div>
        </LinkColumn>
        <LinkColumn heading={contact.name}>
          {Object.values(contact.info).map((e) => (
            <span>{e}</span>
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
