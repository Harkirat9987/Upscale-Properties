import { useState } from "react";
import ImgPlaceholder from "./ImgPlaceholder";
import "./Tabs.css";

export default function Tabs({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="ftabs">
      <div className="ftabs__heads" role="tablist">
        {items.map((label, i) => (
          <button
            key={label}
            role="tab"
            aria-selected={active === i}
            className={`ftabs__head ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="ftabs__panel">
        <ImgPlaceholder ratio="850 / 570" seed={active} rounded />
      </div>
    </div>
  );
}
