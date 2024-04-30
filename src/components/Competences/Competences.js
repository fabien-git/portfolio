import React from "react";
import Title from "../Title/Title";
import Card from "../CardCompetences/CardCompetences";
import styles from "./Competences.module.css";
import htmlLogo from '../../assets/competences/logo-html.png';
import cssLogo from '../../assets/competences/logo-css.png';
import bootstrapLogo from '../../assets/competences/logo-bootstrap.png';
import figmaLogo from '../../assets/competences/logo-figma.png';
import jsLogo from '../../assets/competences/logo-js.png';
import psLogo from '../../assets/competences/logo-ps.png';
import psqlLogo from '../../assets/competences/logo-psql.png';
import railsLogo from '../../assets/competences/logo-rails.png';
import reactLogo from '../../assets/competences/logo-react.png';
import rubyLogo from '../../assets/competences/logo-ruby2.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInLeft= (elem, delay, duration) => {
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




const Competences = () => {
  const competenceRef = useRef(null);


  useEffect(() => {
    slideInLeft(competenceRef.current, 200, 1000);
  }, []);



  return (
    <div className={styles.competences}>
      <div className={styles.container}>
        <Title name={"Mes compétences"}/>
        <div className={styles["competences-flex"]}>
        <div className={styles["competences-flex-image"]} ref={competenceRef}>
        </div>
          <div className={styles["competences-flex-content"]}>
           <Card imageUrl={htmlLogo} name='HTML'/>
           <Card imageUrl={cssLogo} name='CSS'/>
           <Card imageUrl={jsLogo} name='JS'/>
           <Card imageUrl={reactLogo} name='REACT'/>
           <Card imageUrl={rubyLogo} name='RUBY'/>
           <Card imageUrl={railsLogo} name='RAILS'/>
           <Card imageUrl={bootstrapLogo} name='BOOTSTRAP'/>
           <Card imageUrl={psqlLogo} name='POSTGRE'/>
           <Card imageUrl={figmaLogo} name='FIGMA'/>
           <Card imageUrl={psLogo} name='PHOTOSHOP'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
