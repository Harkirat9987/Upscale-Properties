import "./ImgPlaceholder.css";

const TONES = ["tone-a", "tone-b", "tone-c", "tone-d"];

export default function ImgPlaceholder({
  ratio = "4 / 5",
  tone,
  seed = 0,
  label,
  icon,
  className = "",
  rounded = true,
  style,
}) {
  const toneClass = tone || TONES[Math.abs(seed) % TONES.length];
  return (
    <div
      className={`img-placeholder ${toneClass} ${rounded ? "is-rounded" : ""} ${className}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      <svg className="img-placeholder__grid" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 25 H100 M0 50 H100 M0 75 H100 M25 0 V100 M50 0 V100 M75 0 V100" />
      </svg>
      {icon && <span className="img-placeholder__icon">{icon}</span>}
      {label && <span className="img-placeholder__label">{label}</span>}
    </div>
  );
}
