import { Link } from "react-router-dom";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../../data/content";
import ImgPlaceholder from "./ImgPlaceholder";
import "./BlogSidebar.css";

export default function BlogSidebar() {
  const recent = BLOG_POSTS.slice(0, 2);
  return (
    <aside className="blog-sidebar">
      <div className="blog-sidebar__block">
        <input className="blog-sidebar__search" type="text" placeholder="Search" />
      </div>
      <div className="blog-sidebar__block">
        <h6>Categories</h6>
        <ul>
          {BLOG_CATEGORIES.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
      <div className="blog-sidebar__block">
        <h6>Recent Posts</h6>
        <ul className="blog-sidebar__recent">
          {recent.map((p, i) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`}>
                <ImgPlaceholder ratio="1 / 1" seed={i} className="blog-sidebar__thumb" />
                <span>
                  <strong>{p.title}</strong>
                  <em>{p.date}</em>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
