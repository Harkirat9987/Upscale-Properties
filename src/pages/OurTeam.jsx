import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import TeamMember from "../components/ui/TeamMember";
import { TEAM_PAGE } from "../data/content";
import "./pages-common.css";

export default function OurTeam() {
  return (
    <>
      <PageHero overline={TEAM_PAGE.overline} title={TEAM_PAGE.title} />

      <section className="section--tight section">
        <div className="container two-col" style={{ alignItems: "center" }}>
          <Reveal as="h2">{TEAM_PAGE.intro.heading}</Reveal>
          <div>
            <Reveal as="p" delay={80} className="text-lead">{TEAM_PAGE.intro.body}</Reveal>
            <Reveal delay={160}>
              <Link to={TEAM_PAGE.intro.cta.to} className="btn btn--primary">{TEAM_PAGE.intro.cta.label}</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title={TEAM_PAGE.grid.heading} subtitle={TEAM_PAGE.grid.body} />
          <div className="grid team-grid">
            {TEAM_PAGE.grid.members.map((m, i) => (
              <TeamMember key={m.name} name={m.name} role={m.role} seed={i} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading overline={TEAM_PAGE.awards.subheading} title={TEAM_PAGE.awards.heading} />
          <div>
            {TEAM_PAGE.awards.items.map((a, i) => (
              <Reveal as="div" key={a.award} delay={i * 70} className="award-row">
                <span className="award-row__title">{a.award}</span>
                <span className="award-row__meta">{a.category}</span>
                <span className="award-row__meta">{a.project}</span>
                <span className="award-row__year">{a.year}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
