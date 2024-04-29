import React, { useState, useEffect } from 'react';
import Nav from "../Nav/Nav";
import SvgHeader,{ fillAnimation } from "../SvgHeader/SvgHeader";
import Styles from "./Header.module.css";

const Header = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);


  const handleAnimationCompleted = () => {
    setAnimationCompleted(true);
  };



  return (
    <div className={Styles.Header}>
      <Nav />
      <div className={Styles.blueCircle}></div>
      <div className={Styles.headerFeatures}></div>
      <div className={Styles["header-content"]}>
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
