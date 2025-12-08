import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";

import HomeSection from "@/components/HomeSection/HomeSection";
import ProductCard from "@/components//ProductCard/ProductCard";
import { Slider, SliderContainer, SliderMainContainer } from "./FavsStyled";
import Button from "@/components/Button/Button";

//const heading = "PineBeauty's favs";

interface SliderPropsI {
  heading: string;
}

const PineBeautyFavs = ({ heading }: SliderPropsI) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
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
                fill={theme.colors.blackTransparent2}
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
                id: "1",
                name: " test name 1",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "2",
                name: " test name 2",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "3",
                name: " test name 3",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "4",
                name: " test name",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "5",
                name: " test name",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "6",
                name: " test name",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "7",
                name: " test name",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "8",
                name: " test name",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
              }}
            ></ProductCard>
          </Slider>
          <Slider>
            <ProductCard
              product={{
                id: "9",
                name: " test name",
                price: 123,
                currency: "EUR",
                image: "",
                category: "OIL",
                productTypeName: "SCRUBS_AND_MASKS",
                tags: [],
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
                fill={theme.colors.blackTransparent2}
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
