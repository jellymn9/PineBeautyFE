import { Trash } from "lucide-react";
import { formatPrice } from "../../helpers/formatters";
import { remove } from "../../state/reducers/cartReducer";
import { CartItemT, RawProductT } from "../../utils/types";
import { useAppDispatch } from "../../withTypes";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import {
  Item,
  ItemImg,
  ItemDetailsAndActions,
  ItemPrice,
  ItemName,
  ItemInnerContainer,
  HSeparator,
  ItemDetails,
  BtnWrapper,
  DetailsAndBtnWrapper,
} from "./CartItemStyled";

interface CartItemPropsI {
  product: RawProductT & CartItemT;
}

const imageURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/oilBottleCustomFormat.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/oilBottleCustomFormat.jpg";

export const CartItem = ({ product }: CartItemPropsI) => {
  const { id, price, name, quantity, currency } = product;

  const dispatch = useAppDispatch();

  return (
    <Item>
      <ItemInnerContainer>
        <ItemImg src={imageURL} />
        <DetailsAndBtnWrapper>
          <ItemDetailsAndActions>
            <ItemName>{name.toLocaleUpperCase()}</ItemName>
            <ItemDetails>
              <span>50 ML</span>
              <span>Pine Beauty</span>
              <ItemPrice>{formatPrice(price, currency)}</ItemPrice>
            </ItemDetails>
            <Counter id={id} quantity={quantity} />
          </ItemDetailsAndActions>
          <BtnWrapper>
            <Button
              variant="icon"
              text=""
              icon={<Trash size={22} strokeWidth={1.5} />}
              handleClick={() => dispatch(remove(id))}
            />
          </BtnWrapper>
        </DetailsAndBtnWrapper>
      </ItemInnerContainer>
      <HSeparator />
    </Item>
  );
};
