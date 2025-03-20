import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

import HomeSection from "../HomeSection/HomeSection";
import ProductCard from "../ProductCard/ProductCard";
import { SliderContainer } from "./FavsStyled";

const heading = "PineBeauty's favs";

const PineBeautyFavs = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <HomeSection heading={heading}>
      <SliderContainer ref={sliderRef} className="keen-slider">
        <ProductCard
          product={{
            id: "",
            name: " test name",
            price: 123,
            currency: "$",
            image: "",
            categoryName: "OIL",
            productTypeName: "SCRUBS_AND_MASKS",
          }}
        ></ProductCard>
        <ProductCard
          product={{
            id: "",
            name: " test name",
            price: 123,
            currency: "$",
            image: "",
            categoryName: "OIL",
            productTypeName: "SCRUBS_AND_MASKS",
          }}
        ></ProductCard>
        <ProductCard
          product={{
            id: "",
            name: " test name",
            price: 123,
            currency: "$",
            image: "",
            categoryName: "OIL",
            productTypeName: "SCRUBS_AND_MASKS",
          }}
        ></ProductCard>
      </SliderContainer>
    </HomeSection>
  );
};

export default PineBeautyFavs;
