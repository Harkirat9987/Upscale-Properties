import { useLocation, useNavigate } from "react-router-dom";

const scrollToTarget = (target) => {
  if (target) {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Returns goTo(target) — a click handler that scrolls to a section id on the
// homepage (target === null scrolls to top), navigating home first if the
// user is on a different route. Needed because the app uses HashRouter, so
// plain href="#id" anchors would conflict with route-hash navigation.
export default function useAnchorNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (target) => (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToTarget(target);
    } else {
      navigate("/");
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToTarget(target)));
    }
  };
}
