import { useEffect } from "react";
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
  useEffect(() => {
    Object.values(BasicCategories).map(({ name }) => console.log(name));
    console.log("Input type:", document.querySelector(`#body`));
  }, []);

  return (
    <FiltersContainer>
      <FiltersHeading>{heading}</FiltersHeading>
      <FiltersList>
        {Object.values(BasicCategories).map(({ name }) => (
          <Checkbox key={name} id={name} label={name} value={name} />
        ))}
      </FiltersList>
    </FiltersContainer>
  );
};

export default ProductFilters;
