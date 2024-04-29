import React from "react";
import Title from "../Title/Title";
import styles from "./Feature.module.css";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <Title />
        <div className={styles["features-flex"]}>
          <div className={styles["features-flex-content"]}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            </p>
          </div>
          <img src="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
