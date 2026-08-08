import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV } from "../../data/content";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__row">
        <Link to="/" className="site-header__logo" onClick={() => setMobileOpen(false)}>
          Form<span>.</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li
                key={item.label}
                className={item.children ? "has-children" : ""}
              >
                {item.to ? (
                  <NavLink to={item.to} end>
                    {item.label}
                  </NavLink>
                ) : (
                  <span className="site-header__parent-label">{item.label}</span>
                )}
                {item.children && (
                  <ul className="site-header__submenu">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink to={child.to}>{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link to="/contact-us" className="btn btn--accent btn--sm site-header__cta">
            Contact Us
          </Link>
          <button
            className={`site-header__burger ${mobileOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`site-header__mobile ${mobileOpen ? "is-open" : ""}`}>
        <ul>
          {NAV.map((item, i) => (
            <li key={item.label}>
              <div className="site-header__mobile-row">
                {item.to ? (
                  <NavLink to={item.to} end onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </NavLink>
                ) : (
                  <span>{item.label}</span>
                )}
                {item.children && (
                  <button
                    className={`site-header__mobile-toggle ${openIndex === i ? "is-open" : ""}`}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-label="Toggle submenu"
                  />
                )}
              </div>
              {item.children && (
                <ul
                  className="site-header__mobile-submenu"
                  style={{ maxHeight: openIndex === i ? `${item.children.length * 48 + 12}px` : "0px" }}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <NavLink to={child.to} onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
