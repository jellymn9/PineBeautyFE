import { useEffect, useState } from "react";
import { BasicCategories } from "../../utils/constants";
import Checkbox, { CheckboxInputProps } from "../CustomInput/Checkbox";
import {
  FiltersContainer,
  FiltersHeading,
  FiltersList,
} from "./ProductFiltersStyled";

const heading = "Categories";

const ProductFilters = function () {
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    console.log("bla");
  }, [selectedCategories]);

  const handleChange = (
    isChecked: boolean,
    value: CheckboxInputProps["value"]
  ) => {
    //update selectedCategories
    console.log(isChecked);
    if (typeof value == "string") {
      const newSelectedCategories = selectedCategories.includes(value)
        ? selectedCategories.filter((c) => c !== value)
        : [...selectedCategories, value];

      setSelectedCategories(newSelectedCategories);
    }
  };

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
