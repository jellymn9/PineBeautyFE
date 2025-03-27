import { BasicCategories } from "../../utils/constants";
import {
  //FilterLink,
  FilterListItem,
  FiltersContainer,
  FiltersHeading,
  FiltersList,
} from "./ProductFiltersStyled";

const heading = "Product type";

const ProductFilters = function () {
  return (
    <FiltersContainer>
      <FiltersHeading>{heading}</FiltersHeading>
      <FiltersList>
        {Object.values(BasicCategories).map(({ name }) => {
          return <FilterListItem key={name}>{name}</FilterListItem>;
        })}
      </FiltersList>
      {/* <FiltersHeading>Categories</FiltersHeading>
      <FiltersHeading>Tags</FiltersHeading> */}
    </FiltersContainer>
  );
};

export default ProductFilters;
