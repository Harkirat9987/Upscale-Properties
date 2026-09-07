import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { ABOUT } from "../data/content";
import "./pages-common.css";

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Us" />

      <section className="section">
        <div className="container" style={{ maxWidth: 780, margin: "0 auto" }}>
          <Reveal as="h1">{ABOUT.intro.heading}</Reveal>
          <Reveal as="p" delay={60} className="text-lead">{ABOUT.intro.lead}</Reveal>
          {ABOUT.intro.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={100 + i * 80}>{p}</Reveal>
          ))}
          <Reveal as="p" delay={100 + ABOUT.intro.paragraphs.length * 80} className="text-lead" style={{ color: "var(--c-evergreen)", fontFamily: "var(--font-heading)" }}>
            {ABOUT.intro.closing}
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading title={ABOUT.stats.heading} align="center" />
          <div className="grid grid-4">
            {ABOUT.stats.items.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="stat-card">
                <span className="stat-card__num">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                  {s.unit && <span className="stat-card__unit">{s.unit}</span>}
                </span>
                <p className="stat-card__label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title={ABOUT.locations.heading} align="center" />
          <div className="grid grid-2" style={{ maxWidth: 700, margin: "0 auto" }}>
            {ABOUT.locations.items.map((loc, i) => (
              <Reveal key={loc.title} delay={i * 100} className="project-card">
                <ImgPlaceholder ratio="4 / 3" seed={i} className="project-card__img" />
                <div className="project-card__meta" style={{ textAlign: "center" }}>
                  <h4 className="project-card__title">{loc.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={ABOUT.expertise.heading} align="center" />
          <div className="grid grid-3">
            {ABOUT.expertise.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100} className="feature-card">
                <span className="feature-card__icon">{String(i + 1).padStart(2, "0")}</span>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
