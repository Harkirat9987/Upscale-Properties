import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV, BRAND } from "../../data/content";
import useAnchorNav from "../../hooks/useAnchorNav";
import logo from "../../assets/Group 39.png";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const anchorNav = useAnchorNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const goTo = (target) => (e) => {
    setMobileOpen(false);
    anchorNav(target)(e);
  };

  const renderNavItem = (item) =>
    item.to ? (
      <Link to={item.to} onClick={() => setMobileOpen(false)}>
        {item.label}
      </Link>
    ) : (
      <a href={item.target ? `#${item.target}` : "/"} onClick={goTo(item.target)}>
        {item.label}
      </a>
    );

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__row">
        <Link to="/" className="site-header__logo" onClick={goTo(null)}>
          <img src={logo} alt={BRAND} />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.label} className={item.children ? "has-dropdown" : ""}>
                {renderNavItem(item)}
                {item.children && (
                  <ul className="site-header__dropdown">
                    {item.children.map((child) => (
                      <li key={child.group}>
                        <Link to={child.to}>
                          <span className="site-header__dropdown-group">{child.group}</span>
                          {child.caption && (
                            <span className="site-header__dropdown-caption">{child.caption}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
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
          {NAV.map((item) => (
            <li key={item.label}>
              <div className="site-header__mobile-row">
                {renderNavItem(item)}
              </div>
              {item.children && (
                <ul className="site-header__mobile-dropdown">
                  {item.children.map((child) => (
                    <li key={child.group}>
                      <Link to={child.to} onClick={() => setMobileOpen(false)}>
                        <span className="site-header__dropdown-group">{child.group}</span>
                        {child.caption && (
                          <span className="site-header__dropdown-caption">{child.caption}</span>
                        )}
                      </Link>
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
