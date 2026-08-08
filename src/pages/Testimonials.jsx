import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { TESTIMONIALS } from "../data/content";
import "./pages-common.css";

export default function Testimonials() {
  return (
    <>
      <PageHero overline={TESTIMONIALS.overline} title={TESTIMONIALS.title} />
      <section className="section">
        <div className="container grid grid-3">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100} className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__quote">“{t.quote}”</p>
              <div className="testimonial-card__who">
                <span className="testimonial-card__avatar" />
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__loc">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
