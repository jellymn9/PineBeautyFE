import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "../firebase";
import { CartData } from "../utils/types/cartTypes";

function useScrollLocation(elementHeightFromBottom: number) {
  // window scroll befavior
  const [isPointReached, setIsPointReached] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const pointForTrigger = window.innerHeight - elementHeightFromBottom;
      const isTrigger = window.scrollY >= pointForTrigger;
      if (isTrigger !== isPointReached) {
        setIsPointReached(isTrigger);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return isPointReached;
}

function useElementScroll(element: RefObject<HTMLElement>) {
  // element scroll behavior
  const [reachBottom, setReachBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const current = element.current;
    if (current !== null) {
      const elementScrollableHeight = current.scrollHeight;
      const elementHeight = current.clientHeight;
      const elementScrolledFromTop = current.scrollTop;
      if (
        elementScrollableHeight - elementHeight - elementScrolledFromTop == 0 &&
        !reachBottom
      ) {
        setReachBottom(true);
      } else if (reachBottom) {
        setReachBottom(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.current, reachBottom]);

  useEffect(() => {
    const current = element.current;

    current !== null && current.addEventListener("scroll", handleScroll);
    return () => {
      current !== null && current.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll]);

  return { reachBottom };
}

function useHoverBarAnimation() {
  const [hoverLinkWidth, setHoverLinkWidth] = useState(0);
  const [translateStep, setTranslateStep] = useState(0); // consider adding reducer for this
  const prevOffsetLeft = useRef(0);

  const handleHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = event.target;
    const currentTarget = event.currentTarget;
    if (target instanceof HTMLElement && target !== currentTarget) {
      //width
      const targetWidth = target.clientWidth;
      setHoverLinkWidth(targetWidth);
      //step
      const targetOffsetLeft = target.offsetLeft;
      const parentOffsetLeft = currentTarget.offsetLeft;
      const sign = targetOffsetLeft >= prevOffsetLeft.current ? 1 : -1;
      const translateX =
        prevOffsetLeft.current -
        parentOffsetLeft +
        sign * Math.abs(targetOffsetLeft - prevOffsetLeft.current);
      setTranslateStep(translateX);

      prevOffsetLeft.current = targetOffsetLeft;
    }
  };

  const handleMouseLeave = () => {
    setHoverLinkWidth(0);
  };

  return { hoverLinkWidth, translateStep, handleHover, handleMouseLeave };
}

function useCart(userId: string | null) {
  const [cart, setCart] = useState<CartData>({ items: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          const cartData = docSnap.data() as CartData;
          setCart(cartData);
        } else {
          setCart({ items: {} });
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

  return { cart, loading, error };
}

export { useScrollLocation, useElementScroll, useHoverBarAnimation, useCart };
