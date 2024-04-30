import React from "react";
import styles from "./Nav.module.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Nav = () => {

  const navRef = useRef(null);



  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div className={styles.navigationContainer} ref={navRef}>
    <ul className={styles.navigation}>
      <li>
        {" "}
        <a href="#">Accueil</a>
      </li>
      <li>
        {" "}
        <a href="#">Profil</a>
      </li>
      <li>
        {" "}
        <a href="#">Compétences</a>
      </li>
      <li>
        {" "}
        <a href="#">Porfolio</a>
      </li>
      <li>
        {" "}
        <a href="#">Contact</a>
      </li>
    </ul>
    </div>
  );
};

export default Nav;
