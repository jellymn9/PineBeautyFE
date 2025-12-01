import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { db } from "@/firebase";
import { CartDataFirebaseI, CartDataLocalI } from "@/utils/types/cartTypes";
import { serverCartDateConversion } from "../dataMapper";

const initialCartState: CartDataLocalI = { items: {} };

function useCart(userId: string | null) {
  const [cart, setCart] = useState<CartDataLocalI>(initialCartState);
  const [loading, setLoading] = useState(true); // "initial load in progress"
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setCart(initialCartState);
      setLoading(false);
      setError(null);
      return;
    }

    const cartRef = doc(db, "carts", userId);
    let unsubscribe: (() => void) | null = null;
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        // Initial one-shot load
        const initialSnap = await getDoc(cartRef);
        if (cancelled) return;

        if (initialSnap.exists()) {
          const cartData = initialSnap.data() as CartDataFirebaseI;
          const cartDataConv = serverCartDateConversion(cartData);
          setCart(cartDataConv);
        } else {
          setCart({ items: {} });
        }

        setLoading(false);

        // After initial load, attach live listener
        unsubscribe = onSnapshot(
          cartRef,
          (docSnap) => {
            if (cancelled) return;

            if (docSnap.exists()) {
              const cartData = docSnap.data() as CartDataFirebaseI;
              const cartDataConv = serverCartDateConversion(cartData);
              setCart(cartDataConv);
            } else {
              setCart({ items: {} });
            }
            // no loading changes here, already "loaded"
          },
          (err) => {
            if (cancelled) return;
            console.error("Error in cart listener:", err);
            setError("Failed to keep cart in sync.");
          }
        );
      } catch (err) {
        if (cancelled) return;
        console.error("Error loading cart:", err);
        setError("Failed to load cart.");
        setCart({ items: {} });
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userId]);

  return { cart, loading, error };
}

export { useCart };
