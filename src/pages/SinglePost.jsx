import { useParams, Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import BlogSidebar from "../components/ui/BlogSidebar";
import { BLOG_POSTS } from "../data/content";
import "./pages-common.css";
import "./Blog.css";

export default function SinglePost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return (
    <>
      <PageHero overline={post.category} title={post.title} crumb={post.title} />
      <section className="section">
        <div className={post.sidebar ? "container blog-layout" : "container"}>
          <article style={post.sidebar ? {} : { maxWidth: 760, margin: "0 auto" }}>
            <p className="blog-post__meta">
              <span>By {post.author}</span>
              <span>{post.date}</span>
              <span>{post.comments} Comments</span>
            </p>
            <ImgPlaceholder ratio="16 / 9" seed={2} style={{ marginBottom: 40 }} />
            <div className="blog-post__body">
              {post.body.map((block, i) => {
                if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
                if (block.type === "quote")
                  return (
                    <blockquote className="blog-post__quote" key={i}>
                      “{block.text}”
                      <cite>— {block.attribution}</cite>
                    </blockquote>
                  );
                return <p key={i}>{block.text}</p>;
              })}
            </div>
            <div className="blog-post__tags">
              {post.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </article>
          {post.sidebar && <BlogSidebar />}
        </div>
      </section>
    </>
  );
}
