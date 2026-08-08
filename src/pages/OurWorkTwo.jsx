import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ui/ProjectCard";
import { PORTFOLIO } from "../data/content";
import "./pages-common.css";

export default function OurWorkTwo() {
  const data = PORTFOLIO.ourWork2;
  return (
    <>
      <PageHero overline={data.overline} title={data.title} crumb="Our Work — 2" />
      <section className="section--tight section">
        <div className="container grid grid-3">
          {data.items.map((item, i) => (
            <ProjectCard key={item.title} title={item.title} tag={item.tag} seed={i} delay={(i % 3) * 90} />
          ))}
        </div>
      </section>
    </>
  );
}
