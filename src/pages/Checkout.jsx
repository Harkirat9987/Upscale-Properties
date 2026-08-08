import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import "./pages-common.css";
import "./Shop.css";

export default function Checkout() {
  const [payment, setPayment] = useState("bank");

  return (
    <>
      <PageHero overline="Almost there" title="Checkout" />
      <section className="section">
        <div className="container checkout-grid">
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Billing details</h3>
            <div className="checkout-fields">
              <input placeholder="First name" required />
              <input placeholder="Last name" required />
              <input className="full" placeholder="Company name (optional)" />
              <input className="full" placeholder="Street address" required />
              <input placeholder="Town / City" required />
              <input placeholder="State" required />
              <input placeholder="ZIP Code" required />
              <input placeholder="Phone" required />
              <input className="full" placeholder="Email address" type="email" required />
              <textarea className="full" placeholder="Order notes (optional)" rows="4" />
            </div>

            <h3>Payment method</h3>
            <div className="payment-methods">
              {[
                ["bank", "Direct bank transfer"],
                ["check", "Check payments"],
                ["cod", "Cash on delivery"],
              ].map(([value, label]) => (
                <label key={value}>
                  <input type="radio" name="payment" checked={payment === value} onChange={() => setPayment(value)} />
                  {label}
                </label>
              ))}
            </div>

            <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>Place order</button>
          </form>

          <aside className="cart-summary">
            <h4>Order summary</h4>
            <div className="cart-summary__row"><span>Ergo comfort office chair</span><span>$219.00</span></div>
            <div className="cart-summary__row"><span>Modern tan leather loveseat ×2</span><span>$1,478.00</span></div>
            <div className="cart-summary__row"><span>Shipping</span><span>Free</span></div>
            <div className="cart-summary__row"><span>Total</span><span>$1,697.00</span></div>
          </aside>
        </div>
      </section>
    </>
  );
}
