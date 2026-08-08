import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import ProjectCard from "../components/ui/ProjectCard";
import { ABOUT } from "../data/content";
import "./pages-common.css";

export default function AboutUs() {
  return (
    <>
      <PageHero overline={ABOUT.overline} title={ABOUT.title} />

      <section className="section">
        <div className="container two-col">
          <Reveal variant="left">
            <div className="img-pair">
              <ImgPlaceholder ratio="3 / 4" seed={0} />
              <ImgPlaceholder ratio="3 / 4" seed={2} />
            </div>
          </Reveal>
          <div>
            <p className="overline">{ABOUT.intro.overline}</p>
            <h1>{ABOUT.intro.heading}</h1>
            {ABOUT.intro.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80} className="text-lead">{p}</Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading title={ABOUT.stats.heading} subtitle={ABOUT.stats.subheading} />
          <div className="grid grid-3">
            {ABOUT.stats.items.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="stat-card">
                <span className="stat-card__num"><Counter to={s.to} suffix={s.suffix} /></span>
                <p className="stat-card__label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid grid-3">
          {ABOUT.featured.map((f, i) => (
            <ProjectCard key={f.title} title={f.title} tag={f.tag} seed={i} delay={i * 100} ratio="3 / 4" />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading overline={ABOUT.expertise.subheading} title={ABOUT.expertise.heading} align="center" />
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

      <section className="section section--alt">
        <div className="container">
          <SectionHeading overline={ABOUT.blogTeaser.subheading} title={ABOUT.blogTeaser.heading} />
          <div className="grid grid-4">
            {ABOUT.blogTeaser.posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="blog-card">
                <ImgPlaceholder ratio="4 / 3" seed={i} className="blog-card__img" />
                <span className="blog-card__cat">{p.category}</span>
                <h4 className="blog-card__title">{p.title}</h4>
                <p className="blog-card__meta">{p.date} · {p.comments ? `${p.comments} Comments` : "No Comments"}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
