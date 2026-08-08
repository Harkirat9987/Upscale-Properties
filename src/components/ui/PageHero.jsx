import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import "./PageHero.css";

export default function PageHero({ overline, title, crumb }) {
  return (
    <section className="page-hero section--dark section--tight">
      <div className="container">
        <nav className="page-hero__crumbs text-meta">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{crumb || title}</span>
        </nav>
        {overline && <Reveal as="p" className="overline">{overline}</Reveal>}
        <Reveal as="h1" delay={80}>{title}</Reveal>
      </div>
    </section>
  );
}
