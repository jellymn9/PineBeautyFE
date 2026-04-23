import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { db } from "@/firebase";
import { CartDataFirebaseI, CartDataLocalI } from "@/utils/types/cartTypes";
import { serverCartDateConversion } from "../helpers/dataMapper";

type LoadingStatusT = "idle" | "loading" | "success" | "error";

const initialCartState: CartDataLocalI = { items: {} };

function useCart(userId: string | null) {
  const [cart, setCart] = useState<CartDataLocalI>(initialCartState);
  const [status, setStatus] = useState<LoadingStatusT>("idle");
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!userId) {
      setCart(initialCartState);
      setError(null);
      return;
    }

    const cartRef = doc(db, "carts", userId);
    let unsubscribe: (() => void) | null = null;
    let cancelled = false;

    (async () => {
      try {
        setStatus("loading");
        setError(null);

        const initialSnap = await getDoc(cartRef);
        if (cancelled) return;

        if (initialSnap.exists()) {
          const cartData = initialSnap.data() as CartDataFirebaseI;
          setCart(serverCartDateConversion(cartData));
        } else {
          setCart({ items: {} });
        }

        setStatus("success");

        unsubscribe = onSnapshot(
          cartRef,
          (docSnap) => {
            if (cancelled) return;

            if (docSnap.exists()) {
              const cartData = docSnap.data() as CartDataFirebaseI;
              setCart(serverCartDateConversion(cartData));
            } else {
              setCart({ items: {} });
            }
          },
          (err) => {
            if (cancelled) return;
            setError(err);
          },
        );
      } catch (err) {
        if (cancelled) return;

        setError(err);
        setCart({ items: {} });
        setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      if (unsubscribe) unsubscribe();
    };
  }, [userId]);

  return { cart, status, error };
}

export { useCart };
