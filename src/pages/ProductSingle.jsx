import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { PRODUCTS } from "../data/content";
import "./pages-common.css";
import "./Shop.css";

export default function ProductSingle() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors?.[0]);
  const [tab, setTab] = useState("description");

  return (
    <>
      <PageHero overline={product.category} title={product.name} crumb={product.name} />
      <section className="section">
        <div className="container product-single">
          <Reveal>
            <ImgPlaceholder ratio="1 / 1" seed={1} />
          </Reveal>
          <Reveal delay={100}>
            <h1>{product.name}</h1>
            <p className="product-single__price">
              {product.priceOriginal && <del>${product.priceOriginal} </del>}
              ${product.price}{product.priceMax ? ` – $${product.priceMax}` : ""}
            </p>
            {product.description && <p className="text-lead">{product.description}</p>}

            {product.colors && (
              <div className="product-single__swatches">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    className={`product-single__swatch ${color === c ? "is-active" : ""}`}
                    onClick={() => setColor(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            <div className="product-single__actions">
              <div className="product-single__qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
              <button className="btn btn--primary" disabled={product.outOfStock}>
                {product.outOfStock ? "Out of stock" : "Buy now"}
              </button>
            </div>

            <div className="product-tabs">
              {["description", "additional information", `reviews (${product.reviews?.length || 0})`].map((t) => (
                <button key={t} className={tab === t ? "is-active" : ""} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
            <div style={{ paddingTop: 24 }}>
              {tab === "description" && <p>{product.description || "No description available."}</p>}
              {tab === "additional information" && <p>Color: {product.colors?.join(", ") || "—"}</p>}
              {tab?.startsWith("reviews") && product.reviews?.map((r) => (
                <div key={r.name} style={{ marginBottom: 16 }}>
                  <strong>{"★".repeat(r.rating)}</strong>
                  <p style={{ margin: "6px 0" }}>{r.text}</p>
                  <span className="text-meta">{r.name} — {r.date}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
