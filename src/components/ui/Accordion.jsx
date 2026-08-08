import { useState } from "react";
import Reveal from "./Reveal";
import "./Accordion.css";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal as="div" key={item.q} delay={i * 60} className={`accordion__item ${isOpen ? "is-open" : ""}`}>
            <button
              className="accordion__trigger"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="accordion__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="accordion__question">{item.q}</span>
              <span className="accordion__plus" aria-hidden="true" />
            </button>
            <div className="accordion__panel" style={{ maxHeight: isOpen ? "400px" : "0px" }}>
              <p className="accordion__answer">{item.a}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
