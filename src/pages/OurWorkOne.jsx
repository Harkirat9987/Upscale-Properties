import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ui/ProjectCard";
import { PORTFOLIO } from "../data/content";
import "./pages-common.css";

export default function OurWorkOne() {
  const data = PORTFOLIO.ourWork1;
  return (
    <>
      <PageHero overline={data.overline} title={data.title} crumb="Our Work — 1" />
      <section className="section--tight section">
        <div className="container">
          <Reveal as="p" className="text-lead" style={{ maxWidth: 560, marginBottom: 50 }}>{data.subtitle}</Reveal>
          <div className="grid grid-4">
            {data.items.map((item, i) => (
              <ProjectCard key={item.title} title={item.title} tag={item.tag} seed={i} delay={i * 90} ratio="3 / 4" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
