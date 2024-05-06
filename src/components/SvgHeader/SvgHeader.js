import React, { useState, useEffect } from "react";
import Styles from "./SvgHeader.module.css";

const SvgHeader = ({ onAnimationCompleted, onAnimationFinished }) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [svgDisappear, setSvgDisappear] = useState(false);
  const [fillAnimation, setFillAnimation] = useState(false);

  // Cette fonction déclenche l'animation une fois que le composant est monté.
  useEffect(() => {
    // Cette fonction sera exécutée une seule fois lors du montage du composant
    const startAnimation = () => {
      setAnimationStarted(true);
      setTimeout(() => {
        setTrigger(true);
      }, 2000);
      setTimeout(() => {
        setFillAnimation(true);
        onAnimationCompleted();
      }, 2500);
      setTimeout(() => {

        //setAnimationStarted(false);
        //setTrigger(false);
        setSvgDisappear(true);
      }, 2500);
    };

    startAnimation();
  }, []); //

  return (
    <div className={`${Styles.SvgHeader} ${Styles['svg-container']}`}>
      <svg viewBox="0 0 731 717" preserveAspectRatio="xMidYEnd meet">
        <path
          className={`${animationStarted ? Styles["path-1"] : ""} ${
            trigger && Styles["fill-final"]
          } ${svgDisappear ? Styles["disappear"] : ""}`}
          style={{ stroke: "none", fill: "none" }}
          d="M0.5 716.5H4L730 715L727 632L692 625.5L689.5 600L629.5 583.5L585 597V571L521 556L519 437.5L368 408L221.5 437.5L219 546L95 573.5V606L16.5 626.5L13.5 632L0.5 638V716.5Z"
          pathLength="1"
          fill="#D9D9D9"
          stroke="black"
        />
        <ellipse
          className={`${animationStarted ? Styles["path-2"] : ""} ${
            trigger && Styles["fill-final"]
          } ${svgDisappear ? Styles["disappear"] : ""} `}
          style={{ stroke: "none", fill: "none" }}
          cx="357.5"
          cy="123.5"
          rx="124.5"
          ry="123.5"
          pathLength="1"
          fill="#D9D9D9"
        />
      </svg>
    </div>
  );
};

export default SvgHeader;
