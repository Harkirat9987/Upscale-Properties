import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { PORTFOLIO } from "../data/content";
import "./pages-common.css";

export default function SingleProject() {
  const data = PORTFOLIO.singleProject;
  return (
    <>
      <PageHero overline={data.overline} title={data.title} crumb="Single Project" />

      <section className="section">
        <div className="container">
          <ImgPlaceholder ratio="16 / 9" seed={3} className="section" style={{ marginBottom: 50 }} />

          <div className="two-col">
            <Reveal>
              <p className="text-lead">{data.intro}</p>
              <p>{data.body}</p>
            </Reveal>
            <Reveal delay={100} className="contact-info">
              <div className="contact-info__item">
                <h6>Client</h6>
                <p>{data.client}</p>
              </div>
              <div className="contact-info__item">
                <h6>Project focus</h6>
                <p>{data.focus}</p>
              </div>
              <div className="contact-info__item">
                <h6>Our services</h6>
                <p>{data.services}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal as="h2" style={{ marginBottom: 50, maxWidth: 700 }}>{data.sectionHeading}</Reveal>
          <div className="grid grid-3">
            {data.blocks.map((b, i) => (
              <Reveal key={b.no} delay={i * 90} className="feature-card">
                <span className="feature-card__icon">{b.no}</span>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
