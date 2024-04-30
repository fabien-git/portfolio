import React from "react";
import styles from "./CardCompetences.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInTop= (elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
      }
    }
  );
};




const CardCompetences = ({ imageUrl, name }) => {

  const competenceRef = useRef(null);


  useEffect(() => {
    slideInTop(competenceRef.current, 200, 1000);
  }, []);


  return (
    <div className={styles.card} ref={competenceRef}>
      <img src={imageUrl} alt={`logo ${name}`}/>
      <p>{name}</p>
    </div>
   );
};

export default CardCompetences;
