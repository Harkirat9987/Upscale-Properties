import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Accordion from "../components/ui/Accordion";
import { PRICING } from "../data/content";
import "./pages-common.css";

export default function Pricing() {
  const [period, setPeriod] = useState("monthly");
  const plans = PRICING.plans[period];

  return (
    <>
      <PageHero overline={PRICING.overline} title={PRICING.title} />

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="pricing-toggle">
            <button className={period === "monthly" ? "is-active" : ""} onClick={() => setPeriod("monthly")}>Monthly</button>
            <button className={period === "yearly" ? "is-active" : ""} onClick={() => setPeriod("yearly")}>Yearly</button>
          </div>

          <div className="grid grid-3" style={{ textAlign: "left" }}>
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 100}
                className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
              >
                {plan.featured && <span className="badge pricing-card__badge">Recommended</span>}
                <h3>{plan.name}</h3>
                <span className="pricing-card__price">${plan.price}</span>
                <span className="pricing-card__period">{plan.period}</span>
                <ul className="pricing-card__features">
                  {plan.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact-us" className={`btn ${plan.featured ? "btn--accent" : "btn--outline"}`}>
                  Select Plan
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container faq-layout">
          <SectionHeading overline="Common questions" title="Everything you need to know" />
          <Accordion items={PRICING.faqs} />
        </div>
      </section>

      <section className="section--tight section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal as="h2">{PRICING.cta}</Reveal>
          <Reveal delay={100}>
            <Link to="/contact-us" className="btn btn--accent">Get in Touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
