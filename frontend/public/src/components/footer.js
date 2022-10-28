import React from "react";

export default function Footer() {
  return (
    <section className="section1">
      <div className="container">
        <div className="footer">
          <div className="footer__navigation">
            <div className="footer__contact">
              <a href="/">refer a friend</a>
              <a href="/">contact us</a>
              <a href="/">faqs</a>
            </div>
            <div className="footer__form">
              <form action="submit">
                <h2>Sabai in your inbox</h2>
                <input type="text" />
                <button>
                  <a href="/">sign up for updates</a>
                </button>
              </form>
            </div>
            <div className="footer__social">
              <div className="footer__social_links">
                <a href="/">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0089/4487/7630/t/15/assets/socialicon-facebook.png?v=10743408947818877726"
                    alt=""
                    facebook
                  />
                </a>
                <a href="/">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0089/4487/7630/t/15/assets/socialicon-pinterest.png?v=1671313543679346690"
                    alt="instagram"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0089/4487/7630/t/15/assets/socialicon-facebook.png?v=10743408947818877726"
                    alt="pintrest"
                  />
                </a>
              </div>
              <a href="/">blog</a>
            </div>
          </div>
          <div className="footer__label">
            <div className="footer__icon">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62.306"
                  height="85.139"
                  viewBox="0 0 62.306 85.139"
                >
                  <path
                    d="M62.306,0H0V85.139H62.306ZM49.482,49.213V72.036H12.824V49.213H30.1A18.254,18.254,0,0,1,13.14,30.753,18.27,18.27,0,0,1,31.4,12.414,18.23,18.23,0,0,1,49.19,30.829,18.252,18.252,0,0,1,32.231,49.213Z"
                    fill="#ccb560"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="footer__user">
              <a href="/">terms</a>
              <a href="/">privacy</a>
              <a href="/">site designed by laura berglund</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
