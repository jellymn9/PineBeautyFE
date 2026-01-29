import { useState } from "react";
import HomeSection from "@/components/HomeSection/HomeSection";
import {
  CategoriesContainer,
  Category,
  CustomScrollbar,
  CustomScrollThumb,
} from "./CategoriesStyled";

const imageURL = import.meta.env.VITE_R2_DEV_BUCKET_URL;

const heading = "categories";

const categories = [
  {
    imageURL: imageURL + "/hairA3.jpg",
    name: "hair",
  },
  {
    imageURL: imageURL + "/bodyA3.jpg",
    name: "body",
  },
  {
    imageURL: imageURL + "/faceA3.jpg",
    name: "face",
  },
];

const Categories = () => {
  const [offsetSet, setOffsetSet] = useState({
    containerWidth: 0,
    overflowWidth: 0,
  });
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const currentTarget = e.currentTarget;
    const scrollLeft = currentTarget.scrollLeft;
    const widthTarget = currentTarget.clientWidth;
    const overflowWidth = currentTarget.scrollWidth;

    if (
      offsetSet.containerWidth !== widthTarget ||
      offsetSet.overflowWidth !== overflowWidth
    ) {
      setOffsetSet({
        containerWidth: widthTarget,
        overflowWidth: overflowWidth,
      });
    }
    setScrollLeft(scrollLeft);
  };

  return (
    <HomeSection heading={heading}>
      <CategoriesContainer onScroll={(e) => handleScroll(e)}>
        {categories.map(({ imageURL, name }) => (
          <Category $imageURL={imageURL}>{name}</Category>
        ))}
      </CategoriesContainer>
      <CustomScrollbar>
        <CustomScrollThumb $offset={offsetSet} $scrollLeft={scrollLeft} />
      </CustomScrollbar>
    </HomeSection>
  );
};

export default Categories;
