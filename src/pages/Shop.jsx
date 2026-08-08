import { Link } from "react-router-dom";
import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { PRODUCTS } from "../data/content";
import "./pages-common.css";
import "./Shop.css";

export default function Shop() {
  const [sort, setSort] = useState("default");

  const products = [...PRODUCTS].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <PageHero overline="Furniture & decor" title="Shop" />
      <section className="section">
        <div className="container">
          <div className="shop-toolbar">
            <p className="text-meta">Showing 1–{products.length} of {products.length} results</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Default sorting</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>

          <div className="grid grid-3">
            {products.map((p, i) => (
              <Reveal as="article" key={p.slug} delay={(i % 3) * 80} className="product-card">
                <Link to={`/product/${p.slug}`}>
                  <div className="product-card__img">
                    <ImgPlaceholder ratio="1 / 1" seed={i} />
                    {p.sale && <span className="product-card__sale">Sale</span>}
                  </div>
                </Link>
                <span className="product-card__cat">{p.category}</span>
                <h4 className="product-card__name">
                  <Link to={`/product/${p.slug}`}>{p.name}</Link>
                </h4>
                <p className="product-card__price">
                  {p.priceOriginal && <del>${p.priceOriginal}</del>}
                  ${p.price}{p.priceMax ? ` – $${p.priceMax}` : ""}
                </p>
                {p.outOfStock && <p className="product-card__stock">Out of stock</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
