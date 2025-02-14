import type { IconNamesT } from "../../utils/types";
import LinkColumn from "./LinkColumn";
import {
  Container,
  FooterLink,
  HSeparator,
  InfoItem,
  InfoItemContainer,
} from "./LinksSectionStyled";
import Icon from "../Icon/Icon";
import { useState } from "react";

export interface LinkGroupI {
  heading: string;
  links: Array<{ name: string; route: string }>;
}

type LinkGroupsT = Array<LinkGroupI>;

interface ContactI {
  name: string;
  info: Array<[IconNamesT, string]>;
}

const linkGroups: LinkGroupsT = [
  {
    heading: "products",
    links: [
      {
        name: "Scrubs & Masks",
        route: "",
      },
      {
        name: "Natural Deodorants",
        route: "",
      },
      {
        name: "Hair Oils & Serums",
        route: "",
      },
      {
        name: "Solid Shampoos & Hair Soaps",
        route: "",
      },
      {
        name: "Eau de Toilette",
        route: "",
      },
    ],
  },
  {
    heading: "terms of use",
    links: [
      {
        name: "order confirmation",
        route: "",
      },
      {
        name: "availability",
        route: "",
      },
      {
        name: "order cancelation",
        route: "",
      },
      {
        name: "ordering methods",
        route: "",
      },
      {
        name: "returns/changes",
        route: "",
      },
      {
        name: "payment methods",
        route: "",
      },
      {
        name: "terms of use",
        route: "",
      },
      {
        name: "shipping",
        route: "",
      },
    ],
  },
];

const contact: ContactI = {
  name: "contact",
  info: [
    ["phone", "+00000000"],
    ["email", "info@info.com"],
    ["clock", "10:00 am - 6:00 pm"],
  ],
};

const LinksSection = (): JSX.Element => {
  const [isOpenId, setIsOpen] = useState("");

  const handleOpening = (id: string) => {
    if (isOpenId === id) {
      setIsOpen("");
    } else {
      setIsOpen(id);
    }
  };

  return (
    <Container>
      <Icon name="logo" width="100px" height="100px" />
      <HSeparator />
      <LinkColumn
        heading={contact.name}
        isOpen={isOpenId === contact.name}
        handleClick={() => handleOpening(contact.name)}
      >
        {contact.info.map(([icon, value]) => (
          <InfoItemContainer key={value}>
            <Icon name={icon} width="16px" height="16px" />
            <InfoItem>{value}</InfoItem>
          </InfoItemContainer>
        ))}
      </LinkColumn>
      <HSeparator />
      {linkGroups.map((l) => (
        <>
          <LinkColumn
            heading={l.heading}
            key={l.heading}
            isOpen={isOpenId === l.heading}
            handleClick={() => handleOpening(l.heading)}
          >
            {l.links.map((link) => (
              <FooterLink to={link.route} key={link.name}>
                {link.name}
              </FooterLink>
            ))}
          </LinkColumn>
          <HSeparator />
        </>
      ))}
    </Container>
  );
};

export default LinksSection;
