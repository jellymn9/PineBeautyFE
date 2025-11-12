import { Trash } from "lucide-react";
import { formatPrice } from "@/helpers/formatters";
import { CartItemT } from "@/utils/types/cartTypes";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import { useAuth } from "@/context/AuthContext";
import { removeProductFromCart } from "@/APIs/carts";
import { removeItemFromCartLS } from "@/helpers/cartHelper";
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
  product: CartItemT;
}

const imageURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/oilBottleCustomFormat.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/oilBottleCustomFormat.jpg";

export const CartItem = ({ product }: CartItemPropsI) => {
  const { id, price, name, quantity } = product;

  const { user } = useAuth();

  const handleRemove = async () => {
    if (user) {
      await removeProductFromCart(user?.uid, id);
    } else {
      removeItemFromCartLS(id);
    }
  };

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
              <ItemPrice>{formatPrice(price, "EUR")}</ItemPrice>
            </ItemDetails>
            <Counter
              product={product}
              quantity={quantity}
              userId={user?.uid || ""}
            />
          </ItemDetailsAndActions>
          <BtnWrapper>
            <Button
              variant="icon"
              text=""
              icon={<Trash size={22} strokeWidth={1.5} />}
              handleClick={handleRemove}
            />
          </BtnWrapper>
        </DetailsAndBtnWrapper>
      </ItemInnerContainer>
      <HSeparator />
    </Item>
  );
};
