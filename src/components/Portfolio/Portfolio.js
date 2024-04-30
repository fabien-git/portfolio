import React from "react";
import Title from "../Title/Title";
import Card from "../CardPortfolio/CardPortfolio";
import styles from "./Portfolio.module.css";
import ProduitBrut from "../../assets/produitbrut.png"
import PharmacieSalengro from "../../assets/pharmaciesalengro.png"
import Mariage from "../../assets/mariage.png"
import EmpNLoc from "../../assets/EmpNLoc.png"
import DeskHarmony from "../../assets/DeskHarmony.png"

const Portfolio = () => {
  return (
    <div className={styles.portfolio} id="portfolio">
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

<Card imageUrl={Mariage}
           description= "Mon premier site internet,  servant de faire-part :-)"
           name= "deskharmony.me/Mariage"
           url="http://deskharmony.me/Mariage"
           techno ={["Javascript", "Html/Css"]}/>

<Card imageUrl={EmpNLoc}
           description= "Premier projet de groupe au Wagon. Un site décalé , sur la location d'employé. Vous trouverez l'ensemble du projet sur Github."
           name= "EmpNLoc"
           url="https://troopl.com/fabienpittiani/site-web-de-location-demploys"
           techno ={["Javascript", "Html/Css", "Rails", "Stimulus"]}/>

<Card imageUrl={DeskHarmony}
           description= "Second projet de groupe. Pour un site de réservation de bureaux. Vous trouverez l'ensemble du projet sur Github."
           name= "DeskHarmony"
           url="https://troopl.com/fabienpittiani/application-web-deskharmony"
           techno ={["Javascript", "Html/Css", "Rails", "Stimulus"]}/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
