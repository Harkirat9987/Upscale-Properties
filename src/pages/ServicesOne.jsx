import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { SERVICES_1 } from "../data/content";
import "./pages-common.css";

export default function ServicesOne() {
  return (
    <>
      <PageHero overline={SERVICES_1.overline} title={SERVICES_1.title} />

      <section className="section--tight section">
        <div className="container">
          <Reveal as="h1" style={{ maxWidth: 820 }}>{SERVICES_1.hero.heading}</Reveal>
          <Reveal as="p" delay={100} className="text-lead" style={{ maxWidth: 560 }}>{SERVICES_1.hero.body}</Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid grid-3">
          {SERVICES_1.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="feature-card">
              <span className="feature-card__icon">{String(i + 1).padStart(2, "0")}</span>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES_1.blocks.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 60}
              className="two-col"
              style={{ marginBottom: i < SERVICES_1.blocks.length - 1 ? 60 : 0, alignItems: "center" }}
            >
              {i % 2 === 0 ? (
                <>
                  <ImgPlaceholder ratio="5 / 4" seed={i} />
                  <div>
                    <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>{b.tag}</span>
                    <h2>{b.title}</h2>
                    <p className="text-lead">{b.body}</p>
                    <Link to="/contact-us" className="btn btn--outline">Learn More</Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>{b.tag}</span>
                    <h2>{b.title}</h2>
                    <p className="text-lead">{b.body}</p>
                    <Link to="/contact-us" className="btn btn--outline">Learn More</Link>
                  </div>
                  <ImgPlaceholder ratio="5 / 4" seed={i} />
                </>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="overline" style={{ justifyContent: "center" }}>{SERVICES_1.contact.overline}</p>
          <Reveal as="h2">{SERVICES_1.contact.heading}</Reveal>
          <Reveal as="p" delay={100} className="text-lead" style={{ maxWidth: 560, margin: "0 auto 30px" }}>{SERVICES_1.contact.body}</Reveal>
          <Reveal delay={180}>
            <Link to="/contact-us" className="btn btn--accent">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
