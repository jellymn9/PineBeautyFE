import { useAppSelector, useAppDispatch } from "../../withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import {
  productListSelector,
  productStatusSelector,
} from "../../state/selectors";

function App() {
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
      <div>
        {productsList.map((product) => {
          return (
            <div>
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
      {productsStatus === "failed" ? (
        <div>Fetch products failed!</div>
      ) : (
        <div>Fetch data succeeded!</div>
      )}
    </div>
  );
}

export default App;
