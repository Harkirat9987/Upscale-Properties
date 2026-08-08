import "./Marquee.css";

export default function Marquee({ text, speed = 28, reverse = false, className = "" }) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className="marquee__track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <span className="marquee__group" key={i} aria-hidden={i === 1}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
