import React from "react";

import styles from "./Title.module.css";

const Title = ({name}) => {
  return (
    <div className={styles.title}>
      <div className={styles.square}></div>
      <div className={styles.squareMedium}></div>
      <div className={styles.squareLonger}></div>
      <span className={styles.TitleText}>{name}</span>
    </div>
  );
};

export default Title;
