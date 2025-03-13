import { RefObject, useEffect, useRef, useState } from "react";

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
  const [reachTop, setReachTop] = useState(false);

  useEffect(() => {
    const current = element.current;

    function handleScroll() {
      if (current !== null) {
        const elementScrollableHeight = current.scrollHeight;
        const elementHeight = current.clientHeight;
        const elementScrolledFromTop = current.scrollTop;
        // handle scroll top behavior
        if (elementScrolledFromTop === 0) {
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

export { useScrollLocation, useElementScroll, useHoverBarAnimation };
