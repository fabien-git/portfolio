import React from "react";
import Title from "../Title/Title";
import Card from "../CardPortfolio/CardPortfolio";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <Title name={"Mon Portfolio"} />
      </div>
    </div>
  );
};

export default Portfolio;
