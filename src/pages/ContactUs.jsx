import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { FOOTER } from "../data/content";
import "./pages-common.css";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero overline="We'd love to hear from you" title="Contact Us" />
      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <ImgPlaceholder ratio="4 / 3" seed={1} />
            <div className="contact-info__item">
              <h6>Address</h6>
              <p>New York — {FOOTER.address}</p>
            </div>
            <div className="contact-info__item">
              <h6>Email</h6>
              <p>{FOOTER.email}</p>
            </div>
            <div className="contact-info__item">
              <h6>Phone</h6>
              <p>{FOOTER.phone}</p>
            </div>
            <div className="contact-info__item">
              <h6>Office hours</h6>
              <p>Mon–Fri 9:00AM — 6:00PM</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={submit}>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Tell us about your project" required />
              <button type="submit" className="btn btn--primary">
                {sent ? "Message sent!" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
