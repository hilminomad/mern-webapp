import React from "react";
import { Outlet } from "react-router-dom";

export default function Account() {
  return (
    <section className="hero login" style={{ backgroundImage: "none" }}>
      <div className="login__container">
        <div className="login__signin">
          <h2>Account</h2>
        </div>
        <div className="login__signin">
          <p>Mohamed Ali Elansari</p>
          <p>hilmiansari@gmail.com</p>
          <p>United states</p>
          <p>View adresses</p>
        </div>
      </div>
      <Outlet />
    </section>
  );
}
