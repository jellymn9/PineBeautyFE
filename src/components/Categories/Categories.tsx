import { useState } from "react";
import HomeSection from "@/components/HomeSection/HomeSection";
import {
  CategoriesContainer,
  Category,
  CategoryLink,
  CustomScrollbar,
  CustomScrollThumb,
} from "./CategoriesStyled";
import { PRODUCT_CATEGORIES, ROUTES } from "@/utils/constants";

const imageURL = import.meta.env.VITE_R2_DEV_BUCKET_URL;

const heading = "categories";

const categories = [
  {
    category: PRODUCT_CATEGORIES[1],
    imageURL: imageURL + "/hairA3.jpg",
    name: "hair",
  },
  {
    category: PRODUCT_CATEGORIES[0],
    imageURL: imageURL + "/bodyA3.jpg",
    name: "body",
  },
  {
    category: PRODUCT_CATEGORIES[2],
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
        {categories.map(({ imageURL, name, category }) => (
          <CategoryLink
            to={`${ROUTES.products}?category=${category}`}
            key={name}
          >
            <Category $imageURL={imageURL}>{name}</Category>
          </CategoryLink>
        ))}
      </CategoriesContainer>
      <CustomScrollbar>
        <CustomScrollThumb $offset={offsetSet} $scrollLeft={scrollLeft} />
      </CustomScrollbar>
    </HomeSection>
  );
};

export default Categories;
