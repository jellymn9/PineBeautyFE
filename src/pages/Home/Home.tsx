import { Helmet } from "react-helmet-async";
import Button from "@/components/Button/Button";
import Categories from "@/components/Categories/Categories";
import Favs from "@/components/Favs/Favs";
import InfoHome from "@/components/InfoHome/InfoHome";
import {
  DecorativeSeparator,
  FlagHeading,
  Hero,
  HeroInnerContainer,
  MainHeading,
  SectionParagraph,
  SustainableAndPure,
  SustainableFlag,
  SustainableHeading,
} from "./HomeStyled";

const hero = {
  flagHeading: "low waste skincare",
  mainHeading: "Clean beauty with a story",
};

const sustainableAndPure = {
  flagHeading: "Sustainable & Pure",
  mainHeading:
    "Experience the finest natural skincare, crafted for both your skin and the planet",
  description:
    " Skincare should not only nourish your skin but also respect the environment. That's why we curate products with minimal ecological impact— from thoughtfully designed packaging to the final formulation, every detail is eco-conscious.",
};

function Home() {
  return (
    <div>
      <Helmet>
        <title>PineBeauty | Home</title>
        <meta
          name="description"
          content="Discover PineBeauty, your destination for sustainable, low-waste skincare products that nourish your skin and respect the planet."
        />
      </Helmet>
      <Hero>
        <HeroInnerContainer>
          <div>
            <FlagHeading>{hero.flagHeading}</FlagHeading>
            <MainHeading>{hero.mainHeading}</MainHeading>
          </div>
          <Button text="shop" />
        </HeroInnerContainer>
      </Hero>
      <SustainableAndPure>
        <SustainableFlag>{sustainableAndPure.flagHeading}</SustainableFlag>
        <DecorativeSeparator />
        <SustainableHeading>
          {sustainableAndPure.mainHeading}
        </SustainableHeading>
        <SectionParagraph>{sustainableAndPure.description}</SectionParagraph>
      </SustainableAndPure>
      <Favs heading="PineBeauty's favs" />
      <Categories />
      <InfoHome />
    </div>
  );
}

export default Home;
