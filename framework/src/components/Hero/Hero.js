import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ textStyle = "light" }) => {
  return (
    <section className={`${styles.hero} hero is-fullheight-with-navbar`}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className={`title ${styles[textStyle]}`}>Header Header Header</h1>
          <h2 className={`subtitle ${styles[textStyle]}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
