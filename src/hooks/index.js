import { useLayoutEffect, useState } from "react";

export const useStickyHeader = (offset = 0) => {
  const [stick, setStick] = useState(false);
  const handleScrool = () => {
    setStick(window.scrollY > offset);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScrool);
    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  });
  return stick;
};
