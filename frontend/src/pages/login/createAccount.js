import React from "react";

export default function CreateAccount() {
  return (
    <section className="hero login" style={{ backgroundImage: "none" }}>
      <div className="login__container">
        <div className="login__signin">
          <h2>Sign up</h2>
          <form action="submit" className="footer__form login__signin_form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="login__signin_submitbutton">
              <button type="submit">
                <p>SUBMIT</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
