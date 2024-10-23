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

function useElementScroll(element: RefObject<HTMLElement>) {
  // element scroll befavior
  const [reachBottom, setReachBottom] = useState(false);
  const [reachTop, setReachTop] = useState(false);

  useEffect(() => {
    const current = element.current;

    function handleScroll() {
      if (current !== null) {
        const elementScrollableHeight = current.scrollHeight;
        const elementHeight = current.clientHeight;
        const elementScrolledFromTop = current.scrollTop;

        // console.log("elementScrollableHeight: ", elementScrollableHeight);
        // console.log("elementHeight: ", elementHeight);
        // console.log("elementScrolledFromTop: ", elementScrolledFromTop);

        // handle scroll top hefavior
        if (elementScrolledFromTop === 0) {
          console.log(1);
          setReachTop(true);
        } else {
          reachTop && setReachTop(false);
        }
        // handle scroll bottom behavior
        if (
          elementScrollableHeight - elementHeight - elementScrolledFromTop ==
            0 &&
          !reachBottom
        ) {
          console.log(2);
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
  }, [element, reachBottom, reachTop]);

  return { reachBottom, reachTop };
}

export { useScrollLocation, useElementScroll };
