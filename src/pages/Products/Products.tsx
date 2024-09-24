import { useAppSelector, useAppDispatch } from "../../helpers/withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  // useEffect(() => {}, products);

  // const handleProducts = () => {
  //   dispatch(fetchProductsThunk());
  // };
  console.log("products from component: ", products);

  return (
    <div>
      <button onClick={() => dispatch(fetchProductsThunk())}>click me!</button>
      <div>
        {products.list.map((product) => {
          return (
            <div>
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
      {products.status === "failed" ? (
        <div>Fetch products failed!</div>
      ) : (
        <div>Fetch data succeeded!</div>
      )}
    </div>
  );
}

export default App;
