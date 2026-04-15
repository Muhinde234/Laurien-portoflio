import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;
    let ticking = false;

    const updateProgress = () => {
      ticking = false;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = Math.max(scrollHeight - clientHeight, 1);
      setProgress(Math.min(scrollTop / maxScroll, 1));
    };

    const requestTick = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    requestTick();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []);

  return progress;
}
