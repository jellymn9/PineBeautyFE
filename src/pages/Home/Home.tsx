import { Helmet } from "react-helmet-async";
import Button from "@/components/Button/Button";
import Categories from "@/components/Categories/Categories";
import Favs from "@/components/Favs/Favs";
import InfoHome from "@/components/InfoHome/InfoHome";
import {
  CleanBeautyContainer,
  CleanBeautyImage,
  CleanBeautyText,
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

//temporary image
const imageURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/oilBottleCustomFormat.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/oilBottleCustomFormat.jpg";

const heading = "Clean Beauty, Real Results";
const description =
  "Discover the power of botanicals in their purest form. Our collectionharnesses ingredients that have nourished skin for centuries—cold-pressed oils, plant extracts, and mineral-rich clays sourced directly from nature. Each formula is crafted without synthetic fragrances, parabens, or harsh chemicals, because we believe beauty should never come at the cost of your wellbeing.";

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
      <CleanBeautyContainer>
        <CleanBeautyText>
          <SustainableHeading>{heading}</SustainableHeading>
          <SectionParagraph>{description}</SectionParagraph>
        </CleanBeautyText>
        <CleanBeautyImage src={imageURL} alt="Clean Beauty Product" />
      </CleanBeautyContainer>
      <InfoHome />
    </div>
  );
}

export default Home;
