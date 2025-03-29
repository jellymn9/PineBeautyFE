import { BasicCategories } from "../../utils/constants";
import Checkbox from "../CustomInput/Checkbox";
import {
  //FilterLink,
  //FilterListItem,
  FiltersContainer,
  FiltersHeading,
  FiltersList,
} from "./ProductFiltersStyled";

const heading = "Categories";

const ProductFilters = function () {
  const handleChange = () => {};

  return (
    <FiltersContainer>
      <FiltersHeading>{heading}</FiltersHeading>
      <FiltersList>
        {Object.values(BasicCategories).map(({ name }) => (
          <Checkbox
            key={name}
            id={name}
            label={name}
            value={name}
            handleChange={handleChange}
          />
        ))}
      </FiltersList>
    </FiltersContainer>
  );
};

export default ProductFilters;
