import React from "react";
import Title from "../Title/Title";
import Card from "../CardPortfolio/CardPortfolio";
import styles from "./Portfolio.module.css";
import ProduitBrut from "../../assets/produitbrut.png"
import PharmacieSalengro from "../../assets/pharmaciesalengro.png"

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <Title name={"Mon Portfolio"} />
        <div className={styles.cards}>

          <Card imageUrl={ProduitBrut}
           description= "Site de communication pour un maitre d’ouvrage, avec personnalisation de sa gallerie."
           name= "produitbrut.fr"
           url="https://www.produitbrut.fr"
           techno ={["Rails", "Javascript", "Html/Css"]}/>

<Card imageUrl={PharmacieSalengro}
           description= "Site web de communication d'une pharmacie. Cette application permet de mettre en avant les produits,de connaitre son emplacement et ses horaires."
           name= "pharmacie-salengro.fr"
           url="https://www.pharmacie-salengro.fr"
           techno ={["Rails", "Javascript", "Html/Css"]}/>

<Card imageUrl={ProduitBrut}
           description= "Site de communication pour un maitre d’ouvrage, avec personnalisation de sa gallerie."
           name= "produitbrut.fr"
           url="https://www.produitbrut.fr"
           techno ={["Rails", "Javascript", "Html/Css"]}/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
