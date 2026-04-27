import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-60 h-0.75 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-champagne/60 to-champagne transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(232,214,179,0.5)]"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
