import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ui/ProjectCard";
import { PORTFOLIO } from "../data/content";
import "./pages-common.css";

export default function Gallery() {
  const data = PORTFOLIO.gallery;
  return (
    <>
      <PageHero overline={data.overline} title={data.title} />
      <section className="section--tight section">
        <div className="container">
          <Reveal as="p" className="text-lead" style={{ maxWidth: 560, marginBottom: 50 }}>{data.subtitle}</Reveal>
          <div className="grid grid-3">
            {data.items.map((item, i) => (
              <ProjectCard key={item.title} title={item.title} tag={item.tag} seed={i} delay={(i % 3) * 90} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
