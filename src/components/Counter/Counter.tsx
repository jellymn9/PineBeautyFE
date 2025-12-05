import { Loader, Minus, Plus } from "lucide-react";
import Button from "@/components/Button/Button";
import colors from "@/styles/colors";
import { Amount, Container } from "./CounterStyled";
import { CartItemLocalT } from "@/utils/types/cartTypes";
import { useCartContext } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface CounterPropsI {
  quantity: number;
  product: CartItemLocalT;
  actionLoading: boolean;
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const iconsStrokeWidth = 1.5;
const iconColor = colors.black;

const Counter = ({
  product,
  quantity,
  handleLoading,
  actionLoading,
}: CounterPropsI) => {
  const { increase, decrease } = useCartContext();
  const { showToast } = useToast();

  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  const handlePlus = async () => {
    try {
      handleLoading(true);
      //await delay(3000); // Simulate network delay
      await increase(product);
    } catch (e) {
      showToast("Failed to increase product quantity!", "error");
    } finally {
      handleLoading(false);
    }
  };

  const handleMinus = async () => {
    try {
      handleLoading(true);
      //await delay(3000); // Simulate network delay
      await decrease(product);
    } catch (e) {
      showToast("Failed to decrease product quantity!", "error");
    } finally {
      handleLoading(false);
    }
  };

  return (
    <Container>
      {actionLoading ? (
        <Loader size={20} strokeWidth={2} color={iconColor} />
      ) : (
        <>
          <Button
            variant="icon"
            icon={
              <Minus
                size={22}
                strokeWidth={iconsStrokeWidth}
                color={iconColor}
              />
            }
            handleClick={handleMinus}
            disabled={quantity === 0}
          />
          <Amount>{quantity}</Amount>
          <Button
            variant="icon"
            icon={
              <Plus
                size={22}
                strokeWidth={iconsStrokeWidth}
                color={iconColor}
              />
            }
            handleClick={handlePlus}
            disabled={actionLoading}
          />
        </>
      )}
    </Container>
  );
};

export default Counter;
