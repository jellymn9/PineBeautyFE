import { useEffect, useState } from "react";

function useScrollLocation() {
  const [isPointReached, setIsPointReached] = useState(false);

  const pointForTrigger = window.innerHeight - 452;

  useEffect(() => {
    function handleScroll() {
      setIsPointReached(window.scrollY >= pointForTrigger);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isPointReached;
}

export { useScrollLocation };
