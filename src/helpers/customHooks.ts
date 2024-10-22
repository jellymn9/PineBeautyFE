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

function useElementScroll(element: RefObject<HTMLElement>) { // element scroll befavior
  const [reachBottom, setReachBottom] = useState(false);

  const current = element.current;
  function handleScroll() {
    if (current !== null) {
      const elementScrollableHeight = current.scrollHeight;
      const elementHeight = current.clientHeight;
      const elementScrolledFromTop = current.scrollTop;

      if (
        elementScrollableHeight - elementHeight - elementScrolledFromTop == 0 &&
        !reachBottom
      ) {
        setReachBottom(true);
      } else {
        setReachBottom(false);
      }
    }
  }
  useEffect(() => {
    current !== null && current.addEventListener("scroll", handleScroll);

    return () => {
      current !== null && current.removeEventListener("scroll", handleScroll);
    };
  });

  return reachBottom;
}

export { useScrollLocation, useElementScroll };
