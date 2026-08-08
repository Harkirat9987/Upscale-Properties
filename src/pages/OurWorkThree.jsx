import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { PORTFOLIO } from "../data/content";
import "./pages-common.css";

export default function OurWorkThree() {
  const data = PORTFOLIO.ourWork3;
  return (
    <>
      <PageHero overline={data.overline} title={data.title} crumb="Our Work — 3" />
      <section className="section--tight section">
        <div className="container">
          <Reveal as="p" className="text-lead" style={{ maxWidth: 560, marginBottom: 50 }}>{data.subtitle}</Reveal>
          {data.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="two-col"
              style={{ alignItems: "center", marginBottom: i < data.items.length - 1 ? 60 : 0 }}
            >
              {i % 2 === 0 ? (
                <>
                  <ImgPlaceholder ratio="5 / 4" seed={i} />
                  <div>
                    <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>{item.tag}</span>
                    <h2>{item.title}</h2>
                    <p className="text-lead">{item.body}</p>
                    <Link to="/single-project" className="btn btn--outline">See Project</Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span className="badge" style={{ marginBottom: 16, display: "inline-block" }}>{item.tag}</span>
                    <h2>{item.title}</h2>
                    <p className="text-lead">{item.body}</p>
                    <Link to="/single-project" className="btn btn--outline">See Project</Link>
                  </div>
                  <ImgPlaceholder ratio="5 / 4" seed={i} />
                </>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
