import { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import {
  createFirestoreOrder,
  createPayPalOrder,
  capturePayPalOrder,
} from "@/APIs/orders";
import { useCartContext } from "@/context/CartContext";
import { getShippingAddressFromSession } from "@/helpers/checkoutHelpers/checkoutHelper";
import { toOrderItems } from "@/helpers/dataMapper";

const Review = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState<string | null>(null);

  const { cartItems } = useCartContext();
  const shippingData = getShippingAddressFromSession();

  useEffect(() => {
    if (!shippingData) return;
    const init = async () => {
      const orderItems = toOrderItems(cartItems);
      const orderId = await createFirestoreOrder(orderItems, shippingData);
      setOrderId(orderId);
    };

    init();
  }, [cartItems, shippingData]);

  if (!shippingData) {
    return <div>Shipping data not found</div>;
  }

  const createOrder = async () => {
    return await createPayPalOrder(orderId!);
  };

  const onApprove = async (data: { orderID: string }) => {
    await capturePayPalOrder(orderId!, data.orderID);
    navigate("/order-confirmation");
  };

  const onError = (err: unknown) => {
    console.error("PayPal error", err);
  };

  if (!orderId) return <div>Loading...</div>;

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
    />
  );
};

export default Review;
