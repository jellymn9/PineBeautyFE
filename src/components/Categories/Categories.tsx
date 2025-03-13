import HomeSection from "../HomeSection/HomeSection";
import { CategoriesContainer, Category } from "./CategoriesStyled";

const heading = "categories";

const Categories = () => {
  return (
    <HomeSection heading={heading}>
      <CategoriesContainer>
        <Category />
        <Category />
        <Category />
      </CategoriesContainer>
    </HomeSection>
  );
};

export default Categories;
