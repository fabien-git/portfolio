import React from "react";
import styles from "./CardPortfolio.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const scale= (elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      scale:0

    },
    {
     scale:1,
      scrollTrigger: {
        trigger: elem,
        start: "top center ",
        end: "bottom center"
      }
    }
  );
};



const CardPortfolio = ({ imageUrl, description, name, url, techno }) => {

  const cardRef = useRef(null);

  useEffect(() => {
    scale(cardRef.current, 0, 500);
  }, []);

  return (
    <div className={styles.card} ref={cardRef}>
      <img src={imageUrl} alt={`logo ${name}`} />

      <div className={styles['card-content']}>
        <p>{description}</p>
        <a href={url}>{`${name}`}</a>
        <div className={styles.technologies}>
          {techno && techno.length
            ? techno.map((itemTechno) => (
                <span className={styles['techno-item']}>{itemTechno}</span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
