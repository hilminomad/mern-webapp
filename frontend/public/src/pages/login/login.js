import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="hero login" style={{ backgroundImage: "none" }}>
      <div className="login__container">
        <div className="login__signin">
          <h2>
            Sign in to your<br></br>Account
          </h2>
          <form action="submit" className="footer__form login__signin_form">
            <input type="email" placeholder="Email" />
            <input
              type="password"
              placeholder="Password"
              placeholderTextColor="#806e28"
            />
            <div className="login__signin_submitbutton">
              <button type="submit">
                <p>SIGN IN</p>
              </button>
            </div>
            <div className="login__signin_forgotpasswordbutton">
              <button>
                <a href="/">FORGOT PASSWORD &gt;</a>
              </button>
            </div>
          </form>
        </div>
        <div className="login__seperator"></div>
        <div className="login__signin">
          <h2>
            New<br></br>Costomer
          </h2>
          <div className="login__signin_submitbutton">
            <button type="submit">
              <Link to={"/create"}>
                <p>CREATE ACCOUNT</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
