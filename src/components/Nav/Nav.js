import React from "react";
import styles from "./Nav.module.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faCertificate, faFolderOpen,faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Nav = () => {

  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);



  return (
    <div className={styles.navigationContainer} ref={navRef}>


    <ul className={styles.navigationMobile}>
      <li>
        {" "}
       <Link to="header" smooth={true} duration={500}><FontAwesomeIcon icon={faHome} /></Link>
      </li>
      <li>
        {" "}
        <Link to="feature" smooth={true} duration={500}><FontAwesomeIcon icon={faUserTie} /></Link>
      </li>
      <li>
        {" "}
        <Link to="competences" smooth={true} duration={500}><FontAwesomeIcon icon={faCertificate} /></Link>

      </li>
      <li>
        {" "}
        <Link to="portfolio" smooth={true} duration={500}><FontAwesomeIcon icon={faFolderOpen} /></Link>

      </li>
      <li>
        {" "}
        <Link to="form" smooth={true} duration={500}><FontAwesomeIcon icon={faEnvelope}  /></Link>
      </li>
    </ul>
    </div>
  );
};

export default Nav;
