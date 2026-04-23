import { getCart, overwriteCart } from "@/APIs/carts";
import { clearCartLocal, mergeCartsLocal } from "@/helpers/cartHelper";

export async function mergeCarts(userId: string): Promise<void> {
  const serverCart = await getCart(userId);
  const mergeLocal = mergeCartsLocal(serverCart);
  if (!mergeLocal) return;
  await overwriteCart(userId, mergeLocal);
  clearCartLocal();
}
