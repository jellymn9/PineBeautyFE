import { useMediaQuery } from "@custom-react-hooks/use-media-query";

import Accordion from "@/components/UI/Accordion/Accordion";
import ContactInfo from "@/components/Footer/ContactInfo/ContactInfo";
import LinksList from "@/components/Footer/Links/Links";
import { Container, LinksContainer } from "./LinksSectionStyled";

type LinkComponentF = (heading?: string) => JSX.Element;

interface DataI {
  heading: string;
  getChildComponent: LinkComponentF;
}

type LinkGroupsT = Array<DataI>;

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
    getChildComponent: (heading = "") => {
      return <LinksList list={products.links} heading={heading} />;
    },
  },
  {
    heading: termsOfUse.heading,
    getChildComponent: (heading = "") => (
      <LinksList list={termsOfUse.links} heading={heading} />
    ),
  },
];

const contactInfo: DataI = {
  heading: "contact",
  getChildComponent: (isHeading = "") => {
    return <ContactInfo isHeaderShown={!!isHeading} />;
  },
};

const data = [contactInfo, ...linkGroups];
const accordionData = data.map((singleData) => {
  const { getChildComponent, ...rest } = singleData;
  return {
    ...rest,
    childComponent: getChildComponent(),
  };
});

const LinksSection = (): JSX.Element => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      {isTablet ? (
        <LinksContainer>
          {data.map(({ heading, getChildComponent }) =>
            getChildComponent(heading),
          )}
        </LinksContainer>
      ) : (
        <Accordion data={accordionData} />
      )}
    </Container>
  );
};

export default LinksSection;
