import { useState } from "react";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import Marquee from "../components/ui/Marquee";
import TeamMember from "../components/ui/TeamMember";
import { HOME } from "../data/content";

const scrollToId = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
import "./pages-common.css";
import "./Home.css";

export default function Home() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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
              <a href="#contact" className="btn btn--accent" onClick={scrollToId("contact")}>
                {HOME.hero.cta.label}
              </a>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={100} className="home-hero__media">
            <ImgPlaceholder ratio="1 / 1" seed={0} />
            <div className="home-hero__stat">
              {HOME.hero.cards.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO STATEMENT / ABOUT */}
      <section className="section intro-statement" id="about">
        <div className="container intro-statement__inner">
          <Reveal as="p" className="intro-statement__lead">
            {HOME.intro.lead}
          </Reveal>
          <Reveal as="p" delay={100} className="text-lead intro-statement__body">
            {HOME.intro.body}
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
        <Marquee text={HOME.marquee} speed={30} />
      </div>

      {/* TEAM */}
      <section className="section--dark section team-section">
        <div className="container">
          <div className="team-section__head">
            <Reveal as="p" className="overline">{HOME.team.title}</Reveal>
            <Reveal as="h1" delay={80}>{HOME.team.heading}</Reveal>
          </div>
          <div className="grid grid-2 team-section__grid">
            {HOME.team.members.map((m, i) => (
              <TeamMember key={m.name} name={m.name} role={m.role} seed={i} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section cta-band section--dark" id="contact">
        <div className="container contact-grid">
          <div>
            <Reveal as="h2">{HOME.contact.heading}</Reveal>
            <Reveal delay={100} as="p" className="text-lead">{HOME.contact.body}</Reveal>
            <Reveal delay={140} as="p" className="text-lead" style={{ fontWeight: 700 }}>{HOME.contact.emphasis}</Reveal>
          </div>
          <Reveal delay={150}>
            <form className="contact-form" onSubmit={submit}>
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Location of Interest" />
              <textarea placeholder="Message" />
              <button type="submit" className="btn btn--accent">
                {sent ? "Thanks — we'll be in touch!" : HOME.contact.cta}
              </button>
              <p className="contact-form__note">{HOME.contact.note}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
