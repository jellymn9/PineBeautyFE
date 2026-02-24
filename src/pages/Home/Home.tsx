import { Helmet } from "react-helmet-async";
import Button from "@/components/UI/Button/Button";
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
  HeroImage,
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
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/generic1.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/generic1.jpg";

const CLEAN_BEAUTY_HEADING = "Clean Beauty, Real Results";
const CLEAN_BEAUTY_DESCRIPTION =
  "Discover the power of botanicals in their purest form. Our collectionharnesses ingredients that have nourished skin for centuries—cold-pressed oils, plant extracts, and mineral-rich clays sourced directly from nature. Each formula is crafted without synthetic fragrances, parabens, or harsh chemicals, because we believe beauty should never come at the cost of your wellbeing.";
const CLEAN_BEAUTY_FLAG = "clean beuty guide";

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
        <picture>
          <source
            media={"(max-width: 769px)"}
            type="image/avif"
            srcSet="/images/gen3-768-mobile.avif 768w, /images/gen3-480-mobile.avif 480w"
            sizes="100vw"
          />
          <source
            type="image/avif"
            srcSet={
              "/images/gen3-1920.avif 1920w, /images/gen3-1280.avif 1280w, /images/gen3-1024.avif 1024w"
            }
            sizes="100vw"
          />
          <source
            media={"(max-width: 769px)"}
            type="image/webp"
            srcSet="/images/gen3-768-mobile.webp 768w, /images/gen3-480-mobile.webp 480w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/gen3-1920.webp 1920w, /images/gen3-1280.webp 1280w, /images/gen3-1024.webp 1024w"
            sizes="100vw"
          />
          <HeroImage
            alt="An image"
            src="/images/gen3-1920.jpg"
            fetchPriority="high"
          />
        </picture>
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
          <SustainableFlag>{CLEAN_BEAUTY_FLAG}</SustainableFlag>
          <SustainableHeading>{CLEAN_BEAUTY_HEADING}</SustainableHeading>
          <SectionParagraph>{CLEAN_BEAUTY_DESCRIPTION}</SectionParagraph>
        </CleanBeautyText>
        <CleanBeautyImage src={imageURL} alt="Clean Beauty Product" />
      </CleanBeautyContainer>
      <InfoHome />
    </div>
  );
}

export default Home;
