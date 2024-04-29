import React from "react";
import styles from "./CardPortfolio.module.css";

const CardPortfolio = ({ imageUrl, description, name, url, techno }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={`logo ${name}`} />

      <div className={styles['card-content']}>
        <p>{description}</p>
        <a href={url}>{`Visiter : ${name}`}</a>
        <div className={styles.technologies}>
          {techno && techno.length
            ? techno.map((itemTechno) => (
                <span className={styles['techno-item']}>{itemTechno}</span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
