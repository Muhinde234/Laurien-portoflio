export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
  
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
        style={{ background: "rgba(232,214,179,0.05)", animationDuration: "4s" }}
      ></div>
    
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
        style={{ background: "rgba(232,214,179,0.03)" }}
      ></div>
     
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl"
        style={{ background: "rgba(245,240,232,0.02)" }}
      ></div>
     
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,214,179,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(232,214,179,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>
    </div>
  );
}
