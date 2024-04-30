import React from "react";
import Title from "../Title/Title";
import styles from "./Feature.module.css";
import aboutme from "../../assets/about.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInLeft = (elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
      }
    }
  );
};

const slideInRight= (elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      x: 200,
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
      }
    }
  );
};


const Features = () => {

  const featuresContentRef = useRef(null);
  const featuresImageRef = useRef(null);

  useEffect(() => {
    slideInLeft(featuresContentRef.current, 200, 1000);
  }, []);

  useEffect(() => {
    slideInRight(featuresImageRef.current, 0, 1000);
  }, []);

  return (
    <div className={styles.features}>
      <div className={styles.container} >
        <Title name={"Qui suis-je ?"} />
        <div className={styles["features-flex"]}>
          <div className={styles["features-flex-content"]} ref={featuresContentRef}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className={styles["features-flex-image"]} ref={featuresImageRef}>
            <img src={aboutme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
