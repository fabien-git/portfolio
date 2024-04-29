import React from "react";
import styles from "./CardPortfolio.module.css";

const CardPortfolio = ({ imageUrl, description, name, url, techno }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={`logo ${name}`} />

      <div className={styles.card - content}>
        <p>{description}</p>
        <a href={url}>{`Visiter : ${name}`}</a>
        <div className="technologies">
          {techno && techno.length
            ? techno.map((itemTechno) => (
                <div className="techno-item">{itemTechno}</div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
