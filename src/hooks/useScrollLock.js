import { useEffect } from "react";

export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
}
