import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Accordion from "../components/ui/Accordion";
import { SERVICES_2 } from "../data/content";
import "./pages-common.css";

export default function ServicesTwo() {
  return (
    <>
      <PageHero overline={SERVICES_2.hero.subheading} title={SERVICES_2.hero.heading} crumb="Services — 2" />

      <section className="section--tight section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal as="p" className="text-lead" style={{ maxWidth: 640, margin: "0 auto 26px" }}>{SERVICES_2.hero.body}</Reveal>
          <Reveal delay={100}>
            <Link to={SERVICES_2.hero.cta.to} className="btn btn--primary">{SERVICES_2.hero.cta.label}</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col" style={{ alignItems: "center" }}>
          <Reveal as="h2">{SERVICES_2.mission.heading}</Reveal>
          <Reveal as="p" delay={100} className="text-lead">{SERVICES_2.mission.body}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-4">
          {SERVICES_2.grid.map((label, i) => (
            <Reveal key={label} delay={i * 80} className="feature-card">
              <span className="feature-card__icon">{String(i + 1).padStart(2, "0")}</span>
              <h4>{label}</h4>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline={SERVICES_2.process.subheading} title={SERVICES_2.process.heading} />
          <div className="grid grid-2">
            {SERVICES_2.process.steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 100} className="feature-card">
                <span className="feature-card__icon">{s.no}</span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div>
            <SectionHeading overline={SERVICES_2.faqs.subheading} title={SERVICES_2.faqs.heading} />
            <p className="text-lead">{SERVICES_2.faqs.intro}</p>
          </div>
          <Accordion items={SERVICES_2.faqs.items} />
        </div>
      </section>

      <section className="section--tight section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal as="h2">{SERVICES_2.cta}</Reveal>
          <Reveal delay={100}>
            <Link to="/contact-us" className="btn btn--accent">Get in Touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
