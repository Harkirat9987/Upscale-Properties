import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { HOME } from "../data/content";
import "./pages-common.css";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero title="Contact Us" />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <Reveal as="h2">{HOME.contact.heading}</Reveal>
            <Reveal delay={100} as="p" className="text-lead">{HOME.contact.body}</Reveal>
            <Reveal delay={140} as="p" className="text-lead" style={{ fontWeight: 700 }}>{HOME.contact.emphasis}</Reveal>
          </div>
          <Reveal delay={150}>
            <form className="contact-form" onSubmit={submit}>
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Location of Interest" />
              <textarea placeholder="Message" />
              <button type="submit" className="btn btn--primary">
                {sent ? "Thanks — we'll be in touch!" : HOME.contact.cta}
              </button>
              <p className="contact-form__note">{HOME.contact.note}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
