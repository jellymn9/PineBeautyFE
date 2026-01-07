import { SetURLSearchParams } from "react-router-dom";
import { PRODUCT_CATEGORIES } from "@/utils/constants";
import Checkbox, {
  CheckboxInputProps,
} from "@/components/CustomInput/Checkbox";
import {
  FilterListItem,
  FiltersContainer,
  FiltersHeading,
  FiltersList,
} from "./ProductFiltersStyled";

interface ProductFiltersPropsI {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

const HEADING = "Categories";

const ProductFilters = function ({
  setSearchParams,
  searchParams,
}: ProductFiltersPropsI) {
  const categories = searchParams.getAll("category");

  const handleChange = (
    _isChecked: boolean,
    value: CheckboxInputProps["value"]
  ) => {
    if (typeof value !== "string") return;

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const current = next.getAll("category");

      const updated = current.includes(value)
        ? current.filter((c) => c !== value)
        : [...current, value];

      next.delete("category");
      updated.forEach((c) => next.append("category", c));

      return next; // new instance
    });
  };

  return (
    <FiltersContainer>
      <FiltersHeading>{HEADING}</FiltersHeading>
      <FiltersList>
        {PRODUCT_CATEGORIES.map((category) => (
          <FilterListItem key={category}>
            <Checkbox
              id={category}
              label={category}
              value={category}
              checked={categories.includes(category)}
              onCheckedChange={handleChange}
            />
          </FilterListItem>
        ))}
      </FiltersList>
    </FiltersContainer>
  );
};

export default ProductFilters;
