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

export interface LinkGroupI {
  heading: string;
  links: Array<{ name: string; route: string }>;
  isTag: boolean;
}

// type LinkGroupsT = Array<LinkGroupI>;

// interface LinkSectionPropsI {
//   linkGroups: LinkGroupsT;
// }

interface ContactI {
  name: string;
  info: Array<[IconNamesT, string]>;
}

const LinksSection = (): JSX.Element => {
  // const profile = {
  //   name: "profile",
  //   paragraph:
  //     "PineBeauty is an online shop that specialises in Serbian natural and organic beauty & wellness products.",
  // };

  const linkGroups = [
    {
      isTag: false,
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
    // {
    //   isTag: true,
    //   heading: "product tags",
    //   links: [
    //     {
    //       name: "#vegan cosmetics",
    //       route: "",
    //     },
    //     {
    //       name: "#organic cosmetics",
    //       route: "",
    //     },
    //     {
    //       name: "#handmade cosmetics",
    //       route: "",
    //     },
    //     {
    //       name: "#summer essentials",
    //       route: "",
    //     },
    //     {
    //       name: "#gifts",
    //       route: "",
    //     },
    //   ],
    // },
    {
      isTag: false,
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

  return (
    <Container>
      <LinkColumn heading={contact.name}>
        <>
          {contact.info.map(([icon, value]) => (
            <InfoItemContainer key={value}>
              <Icon name={icon} width="16px" height="16px" />
              <InfoItem>{value}</InfoItem>
            </InfoItemContainer>
          ))}
          <HSeparator />
        </>
      </LinkColumn>
      {linkGroups.map((l) => (
        <LinkColumn heading={l.heading} key={l.heading}>
          <>
            {l.links.map((link) => (
              <FooterLink $isTag={l.isTag} to={link.route} key={link.name}>
                {link.name}
              </FooterLink>
            ))}
            <HSeparator />
          </>
        </LinkColumn>
      ))}
    </Container>
  );
};

export default LinksSection;
