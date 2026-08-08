import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import "./pages-common.css";
import "./Shop.css";

export default function MyAccount() {
  const [mode, setMode] = useState("login");

  return (
    <>
      <PageHero overline="Welcome back" title="My Account" />
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container account-form">
          <div className="pricing-toggle" style={{ marginBottom: 40 }}>
            <button className={mode === "login" ? "is-active" : ""} onClick={() => setMode("login")}>Login</button>
            <button className={mode === "register" ? "is-active" : ""} onClick={() => setMode("register")}>Register</button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ textAlign: "left" }}>
            {mode === "login" ? (
              <>
                <input placeholder="Username or email address" required />
                <input placeholder="Password" type="password" required />
                <div className="account-form__row">
                  <label><input type="checkbox" /> Remember me</label>
                  <a href="#" onClick={(e) => e.preventDefault()}>Lost your password?</a>
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>Log in</button>
              </>
            ) : (
              <>
                <input placeholder="Email address" type="email" required />
                <input placeholder="Password" type="password" required />
                <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>Register</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
