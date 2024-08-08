import InstagramSVG from "../../assets/instagram.svg?react";
import FacebookSVG from "../../assets/facebook.svg?react";
import PinterestSVG from "../../assets/pinterest.svg?react";

import LinksSection from "./LinksSection";
import {
  Container,
  Subscription,
  FormHeading,
  SocialIconsContainer,
} from "./FooterStyled";

function Footer() {
  const formHeading = "Be in touch with us:";

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
    {
      isTag: true,
      heading: "product tags",
      links: [
        {
          name: "vegan cosmetics",
          route: "",
        },
        {
          name: "organic cosmetics",
          route: "",
        },
        {
          name: "handmade cosmetics",
          route: "",
        },
        {
          name: "summer essentials",
          route: "",
        },
        {
          name: "gifts",
          route: "",
        },
      ],
    },
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

  return (
    <Container>
      <Subscription>
        <FormHeading>{formHeading}</FormHeading>
        <form>
          <input></input>
          <button>Join us</button>
        </form>
        <SocialIconsContainer>
          <InstagramSVG width="32px" height="32px" />
          <FacebookSVG width="32px" height="32px" />
          <PinterestSVG width="32px" height="32px" />
        </SocialIconsContainer>
      </Subscription>
      <LinksSection linkGroups={linkGroups} />
    </Container>
  );
}

export default Footer;
