import { useKeenSlider } from "keen-slider/react";

import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import HomeSection from "../HomeSection/HomeSection";
import ProductCard from "../ProductCard/ProductCard";
import { Slider, SliderContainer, SliderMainContainer } from "./FavsStyled";
import colors from "../../utils/colors";
import { useState } from "react";
import Button from "../Button/Button";

const heading = "PineBeauty's favs";

const PineBeautyFavs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <HomeSection heading={heading}>
      <SliderMainContainer>
        {loaded && instanceRef.current && (
          <Button
            variant="icon"
            icon={
              <CircleChevronLeft
                size={36}
                strokeWidth={1}
                fill={colors.blackTransparent2}
              />
            }
            handleClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />
        )}
        <SliderContainer ref={sliderRef}>
          <Slider>
            <ProductCard
              product={{
                id: "",
                name: " test name 1",
                price: 123,
                currency: "$",
                image: "",
                categoryName: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "",
                name: " test name 2",
                price: 123,
                currency: "$",
                image: "",
                categoryName: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "",
                name: " test name 3",
                price: 123,
                currency: "$",
                image: "",
                categoryName: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
              }}
            ></ProductCard>
          </Slider>
          <Slider>
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
          </Slider>
          <Slider>
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
          </Slider>
          <Slider>
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
          </Slider>
          <Slider>
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
          </Slider>
          <Slider>
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
          </Slider>
          <Slider>
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
          </Slider>
        </SliderContainer>
        {loaded && instanceRef.current && (
          <Button
            variant="icon"
            icon={
              <CircleChevronRight
                size={36}
                strokeWidth={1}
                fill={colors.blackTransparent2}
              />
            }
            handleClick={() => instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        )}
      </SliderMainContainer>
    </HomeSection>
  );
};

export default PineBeautyFavs;
