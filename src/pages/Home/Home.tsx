import Button from "../../components/Button/Button";
import {
  Categories,
  DecorativeSeparator,
  FlagHeading,
  Hero,
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
      <Hero>
        <FlagHeading>{hero.flagHeading}</FlagHeading>
        <MainHeading>{hero.mainHeading}</MainHeading>
        <Button text="shop" />
      </Hero>
      <SustainableAndPure>
        <SustainableFlag>{sustainableAndPure.flagHeading}</SustainableFlag>
        <DecorativeSeparator />
        <SustainableHeading>
          {sustainableAndPure.mainHeading}
        </SustainableHeading>
        <SectionParagraph>{sustainableAndPure.description}</SectionParagraph>
      </SustainableAndPure>
      <Categories>
        <FlagHeading>categories</FlagHeading>
        <DecorativeSeparator />
      </Categories>
    </div>
  );
}

export default Home;
