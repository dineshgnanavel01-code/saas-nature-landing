/*
 * CANOPY EDITORIAL — editorial index label primitive ("01 / FEATURES").
 * Small uppercase letter-spaced label marking every section, a signature
 * motif of the Verdant brand.
 */
export default function SectionLabel({ index, label, light = false, className = "" }) {
  return (
    <p
      className={`section-label ${light ? "section-label-light" : ""} ${className}`}
    >
      <span className="mr-2 text-amber">{index}</span>
      {label}
    </p>
  );
}
