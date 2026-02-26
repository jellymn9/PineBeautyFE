import { FOOTER_SECTIONS } from "@/utils/constants";
import Accordion from "@/components/UI/Accordion/Accordion";
import ContactInfo from "@/components/Footer/ContactInfo/ContactInfo";
import LinksList from "@/components/Footer/Links/Links";
import {
  AccordionWrapper,
  Container,
  LinksContainer,
} from "./LinksSectionStyled";

const linksSections = [FOOTER_SECTIONS.products, FOOTER_SECTIONS.termsOfUse];

const accordionAdaptedData = [
  {
    heading: FOOTER_SECTIONS.products.heading,
    childComponent: <LinksList list={FOOTER_SECTIONS.products.links} />,
  },
  {
    heading: FOOTER_SECTIONS.termsOfUse.heading,
    childComponent: <LinksList list={FOOTER_SECTIONS.termsOfUse.links} />,
  },
  {
    heading: "contact",
    childComponent: <ContactInfo />,
  },
];

const LinksSection = (): JSX.Element => {
  return (
    <Container>
      <LinksContainer>
        {linksSections.map((section) => (
          <LinksList list={section.links} heading={section.heading} />
        ))}
        <ContactInfo isHeaderShown={true} />
      </LinksContainer>
      <AccordionWrapper>
        <Accordion data={accordionAdaptedData} />
      </AccordionWrapper>
    </Container>
  );
};

export default LinksSection;
