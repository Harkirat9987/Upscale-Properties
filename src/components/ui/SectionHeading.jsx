import Reveal from "./Reveal";
import "./SectionHeading.css";

export default function SectionHeading({ overline, title, subtitle, align = "left", className = "" }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {overline && <Reveal as="p" className="overline">{overline}</Reveal>}
      <Reveal as="h2" delay={80}>{title}</Reveal>
      {subtitle && <Reveal as="p" delay={160} className="text-lead section-heading__subtitle">{subtitle}</Reveal>}
    </div>
  );
}
