import { Link } from "react-router-dom";
import { FOOTER } from "../../data/content";
import Marquee from "../ui/Marquee";
import Reveal from "../ui/Reveal";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__marquee">
        <Marquee text="Follow us on Instagram" speed={22} />
      </div>

      <div className="container site-footer__grid">
        <Reveal className="site-footer__brand">
          <Link to="/" className="site-footer__logo">Form<span>.</span></Link>
          <p>{FOOTER.tagline}</p>
        </Reveal>

        <Reveal delay={80}>
          <h6>Contact</h6>
          <p className="site-footer__addr">{FOOTER.email}</p>
          <p className="site-footer__addr">New York —<br />{FOOTER.address}</p>
        </Reveal>

        <Reveal delay={160}>
          <h6>Links</h6>
          <ul className="site-footer__links">
            {FOOTER.links.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <h6>Get in Touch</h6>
          <div className="site-footer__socials">
            {FOOTER.socials.map((s) => (
              <a key={s.label} href={s.to} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.label[0]}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()}. All rights are reserved.</p>
        <p>Design system by <a href="#" onClick={(e) => e.preventDefault()}>Form Studio</a></p>
      </div>
    </footer>
  );
}
