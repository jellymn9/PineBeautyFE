import { ProductCategories } from "../../utils/constants";
import {
  FilterLink,
  FilterListItem,
  FiltersContainer,
  FiltersHeading,
  FiltersList,
} from "./ProductFiltersStyled";

const ProductFilters = function () {
  return (
    <FiltersContainer>
      <FiltersHeading>Product Type</FiltersHeading>
      <FiltersList>
        {Object.values(ProductCategories).map((category) => {
          return (
            <FilterListItem key={category.name}>
              <FilterLink href={category.link}>{category.name}</FilterLink>
            </FilterListItem>
          );
        })}
      </FiltersList>
      {/* <FiltersHeading>Categories</FiltersHeading>
      <FiltersHeading>Tags</FiltersHeading> */}
    </FiltersContainer>
  );
};

export default ProductFilters;
