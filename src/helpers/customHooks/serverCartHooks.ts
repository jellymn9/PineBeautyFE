import { db } from "@/firebase";
import { CartDataFirebaseI, CartDataLocalI } from "@/utils/types/cartTypes";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { serverCartDateConversion } from "../dataMapper";

function useCart(userId: string | null) {
  const [cart, setCart] = useState<CartDataLocalI>({ items: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState(Object.keys(cart.items).length === 0);

  useEffect(() => {
    if (!userId) {
      setCart({ items: {} });
      setLoading(false);
      return;
    }

    const cartRef = doc(db, "carts", userId);

    const unsubscribe = onSnapshot(
      cartRef,
      (docSnap) => {
        if (docSnap.exists()) {
          // Document exists: update state with the retrieved cart data
          const cartData = docSnap.data() as CartDataFirebaseI;
          const cartDataConv = serverCartDateConversion(cartData);
          setCart(cartDataConv);
          setIsEmpty(Object.keys(cartDataConv.items).length === 0);
        } else {
          setCart({ items: {} });
          setIsEmpty(true);
        }
        setLoading(false);
        setError(null);
      },
      (err) => {
        // Handle any errors from the listener (e.g., permission issues)
        console.error("Error fetching real-time cart:", err);
        setError("Failed to load cart.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return { cart, loading, error, isEmpty };
}

export { useCart };
