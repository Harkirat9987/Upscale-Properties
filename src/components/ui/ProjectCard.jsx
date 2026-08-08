import ImgPlaceholder from "./ImgPlaceholder";
import Reveal from "./Reveal";
import "./ProjectCard.css";

export default function ProjectCard({ title, tag, body, seed = 0, delay = 0, ratio = "4 / 5" }) {
  return (
    <Reveal className="project-card" delay={delay}>
      <ImgPlaceholder ratio={ratio} seed={seed} className="project-card__img" />
      <div className="project-card__meta">
        {tag && <span className="badge">{tag}</span>}
        <h4 className="project-card__title">{title}</h4>
        {body && <p className="project-card__body">{body}</p>}
      </div>
    </Reveal>
  );
}
