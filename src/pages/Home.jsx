import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import Marquee from "../components/ui/Marquee";
import Tabs from "../components/ui/Tabs";
import TeamMember from "../components/ui/TeamMember";
import SectionHeading from "../components/ui/SectionHeading";
import { HOME } from "../data/content";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero section--dark">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <Reveal as="h1" className="home-hero__title">
              {HOME.hero.title}
            </Reveal>
            <Reveal as="p" delay={120} className="text-lead home-hero__body">
              {HOME.hero.body}
            </Reveal>
            <Reveal delay={220}>
              <Link to={HOME.hero.cta.to} className="btn btn--accent">
                {HOME.hero.cta.label}
              </Link>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={100} className="home-hero__media">
            <ImgPlaceholder ratio="1 / 1" seed={0} />
            <div className="home-hero__stat">
              <Counter to={HOME.hero.stat.to} suffix={HOME.hero.stat.suffix} />
              <p>{HOME.hero.stat.label}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="section intro-statement">
        <div className="container">
          <Reveal as="h1" className="intro-statement__text">
            {HOME.intro.title}
          </Reveal>
        </div>
      </section>

      {/* SERVICES STACK */}
      <section className="section section--alt services-stack">
        <div className="container grid grid-3">
          {HOME.stack.map((item, i) => (
            <Reveal key={item.no} delay={i * 100} className="services-stack__item">
              <span className="services-stack__no">{item.no}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="section stats-row">
        <div className="container grid grid-2">
          {HOME.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="stats-row__item">
              <span className="stats-row__num">
                <Counter to={s.to} suffix={s.suffix} />
              </span>
              <span className="stats-row__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE BAND */}
      <div className="marquee-band">
        <Marquee text="Inspiring architecture for every era" speed={30} />
      </div>

      {/* COLLAGE */}
      <section className="section section--alt collage">
        <div className="container collage__grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <ImgPlaceholder key={i} ratio="1 / 1" seed={i} className={`collage__item collage__item--${i}`} />
          ))}
        </div>
      </section>

      {/* TABS SHOWCASE */}
      <section className="section showcase">
        <div className="container showcase__grid">
          <div>
            <Reveal as="h1" className="showcase__heading">
              Form blends design vision with purpose, creating vibrant, functional, and lasting spaces
            </Reveal>
            <Reveal delay={100}>
              <Link to="/contact-us" className="showcase__link">
                Ready to get started? <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Tabs items={HOME.tabs} />
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section--tight partners">
        <div className="container partners__row">
          {["Studio One", "GreenBuild", "Arbor & Co", "Skyline", "Northwood", "Habitat Co"].map((p) => (
            <span key={p} className="partners__logo">{p}</span>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section--dark section team-section">
        <div className="container">
          <div className="team-section__head">
            <Reveal as="p" className="overline">{HOME.team.title}</Reveal>
            <Reveal as="h1" delay={80}>{HOME.team.heading}</Reveal>
          </div>
          <div className="grid grid-3 team-section__grid">
            {HOME.team.members.map((m, i) => (
              <TeamMember key={m.name} name={m.name} role={m.role} seed={i} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section achievements">
        <div className="container">
          <Reveal as="p" className="overline">{HOME.achievements.title}</Reveal>
          <Reveal as="h1" delay={80} className="achievements__heading">{HOME.achievements.heading}</Reveal>
          <div className="grid grid-3 achievements__grid">
            {HOME.achievements.groups.map((g, i) => (
              <Reveal key={g.year} delay={i * 100} className="achievements__col">
                <h6>{g.label}</h6>
                {g.items.map((it) => <p key={it}>{it}</p>)}
                <span className="achievements__year">{g.year}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band section--dark">
        <div className="container cta-band__inner">
          <Reveal as="h2">{HOME.cta.title}</Reveal>
          <Reveal delay={100} as="p" className="text-lead">{HOME.cta.body}</Reveal>
          <Reveal delay={200}>
            <Link to={HOME.cta.link.to} className="btn btn--outline">
              {HOME.cta.link.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
