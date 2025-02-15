//import type { IconNamesT } from "../../utils/types";
import { Container } from "./LinksSectionStyled";
import Icon from "../Icon/Icon";
import Accordion from "../Accordion/Accordion";
import ContactInfo from "./ContactInfo/ContactInfo";
import LinksList from "./Links/Links";

export interface LinkGroupI {
  heading: string;
  childComponent: JSX.Element;
}

type LinkGroupsT = Array<LinkGroupI>;

interface ContactI {
  heading: string;
  childComponent: JSX.Element;
}

const products = {
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
};

const termsOfUse = {
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
};

const linkGroups: LinkGroupsT = [
  {
    heading: products.heading,
    //links: products.links,
    childComponent: <LinksList list={products.links} />,
  },
  {
    heading: termsOfUse.heading,
    childComponent: <LinksList list={termsOfUse.links} />,
  },
];

const contact: ContactI = {
  heading: "contact",
  // info: [
  //   ["phone", "+00000000"],
  //   ["email", "info@info.com"],
  //   ["clock", "10:00 am - 6:00 pm"],
  // ],
  childComponent: <ContactInfo />,
};

const data = [contact, ...linkGroups];

const LinksSection = (): JSX.Element => {
  return (
    <Container>
      <Icon name="logo" width="100px" height="100px" />
      <Accordion data={data} />
    </Container>
  );
};

export default LinksSection;
