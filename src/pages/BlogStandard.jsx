import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import BlogSidebar from "../components/ui/BlogSidebar";
import { BLOG_POSTS } from "../data/content";
import "./pages-common.css";
import "./Blog.css";

export default function BlogStandard() {
  return (
    <>
      <PageHero overline="From the studio" title="Blog — Standard" />
      <section className="section">
        <div className="container blog-layout">
          <div className="blog-list">
            {BLOG_POSTS.map((p, i) => (
              <Reveal as="article" key={p.slug} delay={(i % 3) * 80} className="blog-list__item">
                <Link to={`/blog/${p.slug}`}>
                  <ImgPlaceholder ratio="16 / 9" seed={i} />
                </Link>
                <span className="blog-card__cat">{p.category}</span>
                <h3 className="blog-card__title">
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="blog-card__meta">{p.date} · {p.comments ? `${p.comments} Comments` : "No Comments"}</p>
                <p className="blog-card__excerpt">{p.excerpt}</p>
              </Reveal>
            ))}
          </div>
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}
