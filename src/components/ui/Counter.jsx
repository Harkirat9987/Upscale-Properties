import { useEffect, useRef, useState } from "react";
import useReveal from "../../hooks/useReveal";

export default function Counter({ to, from = 0, suffix = "", prefix = "", duration = 1500, separator = true }) {
  const [ref, visible] = useReveal({ threshold: 0.4 });
  const [value, setValue] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, from, to, duration]);

  const display = separator ? value.toLocaleString("en-US") : String(value);

  return (
    <span ref={ref} className="counter">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
