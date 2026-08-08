import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import ImgPlaceholder from "../components/ui/ImgPlaceholder";
import { PRODUCTS } from "../data/content";
import "./pages-common.css";
import "./Shop.css";

export default function Cart() {
  const [items, setItems] = useState([
    { ...PRODUCTS[0], qty: 1 },
    { ...PRODUCTS[4], qty: 2 },
  ]);

  const updateQty = (slug, qty) =>
    setItems((prev) => prev.map((it) => (it.slug === slug ? { ...it, qty: Math.max(1, qty) } : it)));

  const remove = (slug) => setItems((prev) => prev.filter((it) => it.slug !== slug));

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <>
      <PageHero overline="Your selections" title="Cart" />
      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <p className="text-lead">Your cart is currently empty!</p>
          ) : (
            <div className="two-col">
              <table className="cart-table">
                <thead>
                  <tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>
                </thead>
                <tbody>
                  {items.map((it, i) => (
                    <tr key={it.slug}>
                      <td>
                        <div className="cart-table__product">
                          <ImgPlaceholder ratio="1 / 1" seed={i} />
                          <span>{it.name}</span>
                        </div>
                      </td>
                      <td>${it.price}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={it.qty}
                          onChange={(e) => updateQty(it.slug, Number(e.target.value))}
                          style={{ width: 56, padding: 8 }}
                        />
                      </td>
                      <td>${it.price * it.qty}</td>
                      <td>
                        <button className="cart-table__remove" onClick={() => remove(it.slug)} aria-label="Remove">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary">
                <h4>Cart totals</h4>
                <div className="cart-summary__row"><span>Subtotal</span><span>${subtotal}</span></div>
                <div className="cart-summary__row"><span>Shipping</span><span>Free</span></div>
                <div className="cart-summary__row"><span>Total</span><span>${subtotal}</span></div>
                <Link to="/checkout" className="btn btn--primary" style={{ width: "100%", marginTop: 20 }}>
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
