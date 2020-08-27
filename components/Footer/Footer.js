import React from "react";
import styles from "./Footer.module.css";
const Logo = () => (
  <div className="level-item">
    <img src="logo.png" className={styles.logo} alt="Logo" />
  </div>
);

const Footer = ({ navigation = [], socialButtons }) => {
  const navigationEls = navigation.map((item, idx) => (
    <div className="level-item" key={idx}>
      <a className="is-size-7 has-text-black" href={item[1]}>
        <strong>{item[0]}</strong>
      </a>
    </div>
  ));

  navigationEls.splice(navigationEls.length / 2, 0, <Logo key="logo" />);

  return (
    <div className="container has-text-centered mt-6 py-6">
      <div className="level pt-6 px-6 mx-6">{navigationEls}</div>
      <hr />
      <div className="pt-5">{socialButtons}</div>
      <p className="is-size-7 has-text-dark">© 2020 COMPANY NAME</p>
    </div>
  );
};

export default Footer;
