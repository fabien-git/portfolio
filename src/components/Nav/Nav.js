import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
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
  );
};

export default Nav;
