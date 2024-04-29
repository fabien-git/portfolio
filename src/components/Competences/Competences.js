import React from "react";
import Title from "../Title/Title";
import styles from "./Competences.module.css";

const Competences = () => {
  return (
    <div className={styles.competences}>
      <div className={styles.container}>
        <Title />
        <div className={styles["competences-flex"]}>
          <img src="" />
          <div className={styles["competences-flex-content"]}></div>
          <img src="" />
        </div>
      </div>
    </div>
  );
};

export default Competences;
