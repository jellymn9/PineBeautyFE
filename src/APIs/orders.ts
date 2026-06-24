import { auth } from "@/firebase";
import { ShippingAddressSessionData } from "@/utils/schemas/profileSchema";
import { OrderItemPayloadT } from "@/utils/types/orderTypes";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAuthHeader = async () => {
  const token = await auth.currentUser?.getIdToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const createFirestoreOrder = async (
  items: Array<OrderItemPayloadT>,
  address: ShippingAddressSessionData,
) => {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify({ items, address }),
  });
  const data = await res.json();
  return data.orderId as string;
};

export const createPayPalOrder = async (orderId: string) => {
  const res = await fetch(`${API_BASE_URL}/paypal/create-order`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify({ orderId }),
  });
  const data = await res.json();
  return data.paypalOrderId as string;
};

export const capturePayPalOrder = async (
  orderId: string,
  paypalOrderId: string,
) => {
  await fetch(`${API_BASE_URL}/paypal/capture`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify({ orderId, paypalOrderId }),
  });
};
