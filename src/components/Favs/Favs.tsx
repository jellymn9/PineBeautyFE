import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import HomeSection from "@/components/HomeSection/HomeSection";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Slider, SliderContainer, SliderMainContainer } from "./FavsStyled";
import IconBtn from "../Button/IconBtn/IconBtn";
import { ProductI } from "@/utils/types/productTypes";
import { getFavsProducts } from "@/APIs/products";

interface SliderPropsI {
  heading: string;
}

const PineBeautyFavs = ({ heading }: SliderPropsI) => {
  const [favs, setFavs] = useState<Array<ProductI>>([]);
  const [favsError, setFavsError] = useState<string | null>(null);
  const [isFavsLoading, setIsFavsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    (async function () {
      setIsFavsLoading(true);
      setFavsError(null);

      try {
        const favsData = await getFavsProducts();
        setFavs(favsData);
      } catch (error) {
        setFavsError("Failed to load favorite products.");
        console.error("Error fetching favorite products:", error);
      } finally {
        setIsFavsLoading(false);
      }
    })();
  }, []);

  const hasMultipleSlides = loaded && instanceRef.current && favs.length > 3;
  const isAtStart = currentSlide === 0;
  const isAtEnd =
    loaded && instanceRef.current
      ? currentSlide >= instanceRef.current.track.details.maxIdx
      : false;

  return (
    <HomeSection heading={heading}>
      {isFavsLoading ? (
        <p>Loading favorite products...</p>
      ) : favsError ? (
        <p>{favsError}</p>
      ) : favs.length === 0 ? (
        <p>No favorite products available at the moment.</p>
      ) : (
        <SliderMainContainer>
          {hasMultipleSlides && (
            <IconBtn
              icon={<ChevronLeft size={36} strokeWidth={1} />}
              handleClick={() => instanceRef.current?.prev()}
              disabled={isAtStart}
              label="Previous slide"
            />
          )}

          <SliderContainer ref={sliderRef} className="keen-slider">
            {favs.map((product) => (
              <Slider key={product.id} className="keen-slider__slide">
                <ProductCard product={product} />
              </Slider>
            ))}
          </SliderContainer>

          {hasMultipleSlides && (
            <IconBtn
              icon={<ChevronRight size={36} strokeWidth={1} />}
              handleClick={() => instanceRef.current?.next()}
              disabled={isAtEnd}
              label="Next slide"
            />
          )}
        </SliderMainContainer>
      )}
    </HomeSection>
  );
};

export default PineBeautyFavs;
