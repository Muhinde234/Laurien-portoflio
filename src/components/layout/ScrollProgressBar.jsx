import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-900/50 backdrop-blur-none md:backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 transition-[width] duration-150 ease-out md:shadow-[0_0_12px_rgba(236,72,153,0.6)]"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
