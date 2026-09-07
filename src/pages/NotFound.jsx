import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  return (
    <section
      className="section section--dark"
      style={{ minHeight: "70vh", display: "flex", alignItems: "center", textAlign: "center" }}
    >
      <div className="container">
        <Reveal as="h1" style={{ fontSize: "clamp(4rem, 6rem + 4vw, 9rem)", color: "var(--c-evergreen)" }}>404</Reveal>
        <Reveal as="p" delay={100} className="text-lead" style={{ marginBottom: 30 }}>
          The page you're looking for has moved or no longer exists.
        </Reveal>
        <Reveal delay={200}>
          <Link to="/" className="btn btn--accent">Back to Home</Link>
        </Reveal>
      </div>
    </section>
  );
}
