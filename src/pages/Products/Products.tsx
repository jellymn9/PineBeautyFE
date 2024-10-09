import { useAppSelector, useAppDispatch } from "../../withTypes";

import ProductsList from "../../components/ProductsList/ProductsList";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import {
  productListSelector,
  productStatusSelector,
} from "../../state/selectors";
import { Container } from "./ProductsStyled";

function Products() {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(productListSelector);
  const productsStatus = useAppSelector(productStatusSelector);

  // useEffect(() => {}, products);

  // const handleProducts = () => {
  //   dispatch(fetchProductsThunk());
  // };
  console.log("products from component: ", productsList);

  return (
    <div>
      <button onClick={() => dispatch(fetchProductsThunk())}>click me!</button>
      <Container>
        <div
          style={{
            height: "inherit",
            width: "200px",
            backgroundColor: "gray",
            padding: "20px",
          }}
        >
          Filters
        </div>
        <div>
          <ProductsList products={productsList} />
        </div>
      </Container>
      {productsStatus === "failed" ? (
        <div>Fetch products failed!</div>
      ) : (
        <div>Fetch data succeeded!</div>
      )}
    </div>
  );
}

export default Products;
