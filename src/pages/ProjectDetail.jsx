import { useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { PROJECTS } from "../data/content";
import bangaloreImg from "../assets/Bangalore photo in about us.jpg.jpeg";
import mysoreImg from "../assets/Mysore photo in about us .jpg.jpeg";
import "./pages-common.css";
import "./ProjectDetail.css";

const IMAGES = { bangalore: bangaloreImg, mysore: mysoreImg };

export default function ProjectDetail() {
  const { city } = useParams();
  const data = PROJECTS[city];
  const image = IMAGES[city];

  if (!data) {
    return <PageHero title="Project not found" />;
  }

  return (
    <>
      <PageHero title={data.city} crumb={data.city} />
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container project-detail">
          <Reveal>
            <img src={image} alt={data.title} className="project-detail__img" />
          </Reveal>
          <Reveal delay={100} as="h2" className="project-detail__title">{data.title}</Reveal>
          <Reveal delay={160}>
            <span className="badge">{data.status}</span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
