import { RefObject, useCallback, useEffect, useState } from "react";

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

export { useScrollLocation, useElementScroll };
