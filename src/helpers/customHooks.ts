import { RefObject, useEffect, useState } from "react";

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

function useElementScroll( // element scroll befavior
  element: RefObject<HTMLElement>,
  scrollHeightAdjustment = 0,
  heightOverlapThreshold = 70
) {
  const [reachBottom, setReachBottom] = useState(false);

  useEffect(() => {
    const current = element.current;
    function handleScroll() {
      if (current !== null) {
        const elementScrollableHeight =
          current.scrollHeight - scrollHeightAdjustment;
        const elementScrolledFromTop = current.scrollTop;

        console.log(elementScrollableHeight, elementScrolledFromTop);
        if (
          elementScrollableHeight - elementScrolledFromTop <=
            heightOverlapThreshold &&
          !reachBottom
        ) {
          setReachBottom(true);
        } else {
          setReachBottom(false);
        }
      }
    }

    current !== null && current.addEventListener("scroll", handleScroll);

    return () => {
      current !== null && current.removeEventListener("scroll", handleScroll);
    };
  });

  return reachBottom;
}

export { useScrollLocation, useElementScroll };
