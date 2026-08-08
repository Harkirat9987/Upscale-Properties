import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import Accordion from "../components/ui/Accordion";
import { FAQS } from "../data/content";
import "./pages-common.css";

export default function FAQs() {
  return (
    <>
      <PageHero overline={FAQS.overline} title={FAQS.title} />
      <section className="section">
        <div className="container faq-layout">
          <div>
            <Reveal as="p" className="text-lead">{FAQS.subtitle}</Reveal>
          </div>
          <Accordion items={FAQS.items} />
        </div>
      </section>
    </>
  );
}
