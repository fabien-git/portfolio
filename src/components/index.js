import React from "react";
import Header from "./Header/Header";
import Features from "./Features/Feature";
import Competences from "./Competences/Competences";
import Portfolio from "./Portfolio/Portfolio";
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer';
import "./index.module.css";

const index = () => {
  return (
    <div>
      <Header />
      <Features />
      <Competences />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default index;
