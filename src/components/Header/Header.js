import React, { useState } from 'react';
import Nav from "../Nav/Nav";
import SvgHeader,{ fillAnimation } from "../SvgHeader/SvgHeader";
import Styles from "./Header.module.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";





const Header = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo(
      h1Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo(
      h2Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  const handleAnimationCompleted = () => {
    setAnimationCompleted(true);
  };



  return (
    <div className={Styles.Header}>
      <Nav />
      <div className={Styles.blueCircle}></div>
      <div className={Styles.headerFeatures} ref={h2Ref}></div>
      <div className={Styles["header-content"]} ref={h1Ref}>
        <span>
          <h1>FABIEN PITTIANI</h1>
        </span>

        <p>
          <span>Développeur Web -</span>
          <span className={Styles["header-content-red"]}> Fullstack </span>
        </p>
      </div>
      <div className={Styles.containerImage}>
        <div className={Styles.containerCenter}>
          <div className={`${Styles.mainImage} ${animationCompleted && Styles['mainImage-appear']} `}></div>
          <SvgHeader  onAnimationCompleted={handleAnimationCompleted}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
