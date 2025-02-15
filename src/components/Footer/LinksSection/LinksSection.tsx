import { useMediaQuery } from "@custom-react-hooks/use-media-query";

import Icon from "../../Icon/Icon";
import Accordion from "../../Accordion/Accordion";
import ContactInfo from "../ContactInfo/ContactInfo";
import LinksList from "../Links/Links";
import { Container, LinksContainer } from "./LinksSectionStyled";

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
    childComponent: <LinksList list={products.links} />,
  },
  {
    heading: termsOfUse.heading,
    childComponent: <LinksList list={termsOfUse.links} />,
  },
];

const contactInfo: ContactI = {
  heading: "contact",
  childComponent: <ContactInfo />,
};

const data = [contactInfo, ...linkGroups];

const LinksSection = (): JSX.Element => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  console.log("TEST: ", isTablet);

  return (
    <Container>
      <Icon name="logo" width="100px" height="100px" />
      {isTablet ? (
        <LinksContainer>
          {data.map(({ heading, childComponent }) => childComponent)}
        </LinksContainer>
      ) : (
        <Accordion data={data} />
      )}
    </Container>
  );
};

export default LinksSection;
