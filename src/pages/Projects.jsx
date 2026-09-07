import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import useAnchorNav from "../hooks/useAnchorNav";
import "./pages-common.css";

export default function Projects() {
  const goTo = useAnchorNav();

  return (
    <>
      <PageHero title="Projects" />

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 640, margin: "0 auto" }}>
          <Reveal as="p" className="overline" style={{ justifyContent: "center" }}>Coming Soon</Reveal>
          <Reveal as="h1" delay={80}>Our developments</Reveal>
          <Reveal as="p" delay={140} className="text-lead">
            We're finalizing our first plotted developments across Bangalore and Mysore. Full project details, locations, and plot availability will be published here soon.
          </Reveal>
          <Reveal delay={220}>
            <a href="#contact" className="btn btn--primary" onClick={goTo("contact")}>Get in Touch</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
