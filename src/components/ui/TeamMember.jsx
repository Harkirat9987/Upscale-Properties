import ImgPlaceholder from "./ImgPlaceholder";
import Reveal from "./Reveal";
import "./TeamMember.css";

export default function TeamMember({ name, role, seed = 0, delay = 0 }) {
  return (
    <Reveal className="team-member" delay={delay}>
      <ImgPlaceholder ratio="740 / 975" seed={seed} className="team-member__img" />
      <h6 className="team-member__name">{name}</h6>
      <p className="team-member__role">{role}</p>
    </Reveal>
  );
}
