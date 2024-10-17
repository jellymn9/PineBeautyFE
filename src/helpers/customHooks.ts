import { useEffect, useState } from "react";

function useScrollLocation(elementHeightFromBottom: number) {
  const [isPointReached, setIsPointReached] = useState(false);

  useEffect(() => {
    function handleScroll() {
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

export { useScrollLocation };
