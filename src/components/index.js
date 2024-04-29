import React from "react";
import Header from "./Header/Header";
import Features from "./Features/Feature";
import Competences from "./Competences/Competences";
import Portfolio from "./Portfolio/Portfolio";

import "./index.module.css";

const index = () => {
  return (
    <div>
      <Header />
      <Features />
      <Competences />
      <Portfolio />
    </div>
  );
};

export default index;
