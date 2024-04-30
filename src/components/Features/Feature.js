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
  const featuresRef = useRef(null);

  useEffect(() => {
    slideInLeft(featuresContentRef.current, 200, 1000);
  }, []);

  useEffect(() => {
    slideInRight(featuresImageRef.current, 0, 1000);
  }, []);

  return (
    <div className={styles.features} id="feature">
      <div className={styles.container} >
        <Title name={"Qui suis-je ?"} />
        <div className={styles["features-flex"]}>
          <div className={styles["features-flex-content"]} ref={featuresContentRef}>
            <p>



Je m'appelle Fabien et je suis développeur d'applications web,
 suite à une récente reconversion professionnelle. <br/><br/> Il y a deux ans,
  j'ai commencé à me former de manière autodidacte sur les langages web.<br/><br/>
   Par la suite, j'ai récemment intégré la formation Le Wagon afin de structurer mes connaissances
    et d'acquérir de nouveaux concepts. <br/><br/>
    Je suis diplômé du Wagon et titulaire du diplôme RNCP niveau 6,
     confirmant ainsi mes compétences dans le domaine.
     <br/><br/>
     Je suis maintenant prêt à mettre en pratique mon talent et ma passion pour le développement d'applications web au sein d'une équipe dynamique.
     <br/><br/> N'hésitez pas à me contacter pour discuter de toute opportunité de collaboration ou d'emploi !



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
