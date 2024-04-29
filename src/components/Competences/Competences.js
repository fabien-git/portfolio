import React from "react";
import Title from "../Title/Title";
import Card from "../CardCompetences/CardCompetences";
import styles from "./Competences.module.css";

const Competences = () => {
  return (
    <div className={styles.competences}>
      <div className={styles.container}>
        <Title />
        <div className={styles["competences-flex"]}>

          <div className={styles["competences-flex-content"]}>
           <Card imageUrl='../../assets/competences/logo-js.png' name='HTML'/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Competences;
