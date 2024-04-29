import React from "react";
import styles from "./CardCompetences.module.css";

const CardCompetences = ({ imageUrl, name }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={`logo ${name}`}/>
      <p>{name}</p>
    </div>
  );
};

export default CardCompetences;
