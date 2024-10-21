import { RefObject, useEffect, useState } from "react";

function useScrollLocation(elementHeightFromBottom: number) {
  const [isPointReached, setIsPointReached] = useState(false);

  useEffect(() => {
    function handleScroll() {
      //const t = document.getElementsByTagName("section")[1].scrollHeight;
      // console.log(document.getElementsByTagName("section")[1].scrollHeight);

      const pointForTrigger = window.innerHeight - elementHeightFromBottom; // use height other than innerHeight!
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

function useElementHeight(element: RefObject<HTMLElement>) {
  const [bla, setBla] = useState(false);

  useEffect(() => {
    const current = element.current;
    function handleScroll() {
      console.log(1);
      if (current !== null) {
        const elementScrollableHeight = current.scrollHeight - 236;
        const elementScrolledFromTop = current.scrollTop;
        console.log(
          "tf ",
          elementScrollableHeight - elementScrolledFromTop <= 70
        );
        if (elementScrollableHeight - elementScrolledFromTop <= 70 && !bla) {
          console.log(2);
          //dispatch(fetchProductsThunk());
          setBla(true);
        } else {
          setBla(false);
        }
      }
    }

    current !== null && current.addEventListener("scroll", handleScroll);

    return () => {
      current !== null && current.removeEventListener("scroll", handleScroll);
    };
  });

  return bla;
}

export { useScrollLocation, useElementHeight };
