import { useAppSelector, useAppDispatch } from "../../helpers/withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  // useEffect(() => {}, products);

  // const handleProducts = () => {
  //   dispatch(fetchProductsThunk());
  // };

  return (
    <div>
      <button onClick={() => dispatch(fetchProductsThunk())}>
        {`click me! ${products}`}{" "}
      </button>
    </div>
  );
}

export default App;
