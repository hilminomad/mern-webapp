import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Background from "../../media/about/bg-girlsittingonbluesofa.jpg";
import image1 from "../../media/about/1tissues.jpg";
import image2 from "../../media/about/2glueing.jpg";
import image3 from "../../media/about/3boxes.png";
import image4 from "../../media/about/4assembling.jpg";
import image5 from "../../media/about/5playing.png";
//import Astronaut from '../../media/about/astronaut.jpg'
import data from "../../details";

export default function About() {
  var partext = [
    "Buying furniture online can be tricky. That's why we offer free fabric swatches and all the info you need to create your dream furniture.",
    "Once you've ordered, our craftspeople start building to your specifications. It's fully custom and made to order.",
    "Your new furniture will be shipped via FedEx in multiple boxes and will take about a week to arrive. Check the product page for specifics.",
    "Assemble your new piece within 20 minutes (really) with easy-to-follow instructions.",
    "Time passes. Life happens. We offer a Repair Don't Replace program and a buy-back guarantee to make sure your furniture lasts and lasts and lasts.",
  ];
  const info = data;
  const [value, setValue] = useState(0);
  const [offsetValue, setOffsetValue] = useState(0);
  const [paragraph, setParagraph] = useState("");

  const pageTop = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const fifth = useRef();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setOffsetValue(window.pageYOffset);
      if (
        offsetValue >= 0 &&
        offsetValue <
          second.current.getBoundingClientRect().top * 1.4 -
            pageTop.current.getBoundingClientRect().y
      ) {
        setParagraph(partext[0]);
      } else if (
        offsetValue >=
          second.current.getBoundingClientRect().top * 1.4 -
            pageTop.current.getBoundingClientRect().top &&
        offsetValue <
          third.current.getBoundingClientRect().y -
            pageTop.current.getBoundingClientRect().y
      ) {
        setParagraph(partext[1]);
      } else if (
        offsetValue >=
          third.current.getBoundingClientRect().top * 1.4 -
            pageTop.current.getBoundingClientRect().top &&
        offsetValue <
          fourth.current.getBoundingClientRect().y -
            pageTop.current.getBoundingClientRect().y
      ) {
        setParagraph(partext[2]);
      } else if (
        offsetValue >=
          fourth.current.getBoundingClientRect().top * 1.4 -
            pageTop.current.getBoundingClientRect().top &&
        offsetValue <
          fifth.current.getBoundingClientRect().y -
            pageTop.current.getBoundingClientRect().y
      ) {
        setParagraph(partext[3]);
      } else if (
        offsetValue >=
        fifth.current.getBoundingClientRect().top * 1.4 -
          pageTop.current.getBoundingClientRect().y
      ) {
        setParagraph(partext[4]);
      }
    });
  });

  return (
    <>
      <section className="section" ref={pageTop}>
        <div className="container about__container">
          <div className="about__title">
            <h1>A better furniture brand</h1>
          </div>
          <div className="about__subtitle">
            <h2>
              With Sabai, feel confident that your furniture doesn't sacrifice
              your values. No greenwashing, no chemicals, no sacrificing your
              values. Luxury furniture for less – without the stress.
            </h2>
          </div>
        </div>
      </section>
      <section
        className="expectMore section ourMission"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container">
          <h2>Our mission</h2>
          <h4>
            We're setting a new standard for earth-friendly, affordable, and
            beautiful furniture. Our work is just beginning and we're so glad
            you're with us.
          </h4>
        </div>
      </section>
      <section className="section details">
        <div className="container details__container">
          <div className="details__text">
            <h2>We're into the details</h2>
            <h4>
              From the big picture to the nuts and bolts, we're making better
              furniture for you and the planet.
            </h4>
            <div className="details__dropdown">
              {info.map((detail) => {
                return (
                  <div className="details__info" key={detail.id}>
                    <div className="details__menu">
                      <h4>{detail.name}</h4>
                      <button onClick={() => setValue(detail.id - 1)}>
                        {value + 1 === detail.id ? (
                          <AiOutlineUp className="arrow" />
                        ) : (
                          <AiOutlineDown className="arrow" />
                        )}
                      </button>
                    </div>
                    {value + 1 === detail.id && (
                      <div className="details__content">
                        <p>{detail.text}</p>
                        <img src={detail.image} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="details__image">
            <img src={info[value].image} alt={info[value].name} />
          </div>
        </div>
      </section>
      <section className="section ready">
        <div className="container ready__container">
          <div className="ready__text">
            <h2>Ready to get started?</h2>
            <h4>
              Custom furniture is in your future.
              <br />
              Let's get to it.
            </h4>
            <p>{paragraph}</p>
          </div>
          <div className="ready__images">
            <img src={image1} alt="" ref={first} />
            <img src={image2} alt="" ref={second} />
            <img src={image3} alt="" ref={third} />
            <img src={image4} alt="" ref={fourth} />
            <img src={image5} alt="" ref={fifth} />
          </div>
        </div>
      </section>
    </>
  );
}
