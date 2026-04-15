import { useEffect, useRef, useState } from "react";

export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!start || countRef.current >= target) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      countRef.current = target;
      setCount(target);
      return;
    }

    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      countRef.current += increment;
      if (countRef.current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(countRef.current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}
