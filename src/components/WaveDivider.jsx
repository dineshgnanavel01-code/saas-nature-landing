/*
 * CANOPY EDITORIAL — organic wave divider between light and dark sections.
 * Fills the destination section's color; used in block flow with a negative
 * top margin to overlap the previous section seamlessly.
 */
export default function WaveDivider({ position, color, className = "", flip = false }) {
  const d =
    position === "top"
      ? "M0,80 C240,20 480,120 720,60 C960,10 1200,90 1440,40 L1440,0 L0,0 Z"
      : "M0,40 C240,120 480,10 720,80 C960,130 1200,40 1440,90 L1440,120 L0,120 Z";

  return (
    <div
      className={`w-full ${className}`}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-16 md:h-24"
      >
        <path d={d} fill={color} />
      </svg>
    </div>
  );
}
