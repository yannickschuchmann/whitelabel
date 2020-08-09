import React from "react";
import styles from "./SocialProof.module.css";

const Column = ({ src, alt, url }) => {
  const image = <img className={styles.image} src={src} alt={alt} />;
  return (
    <div className="column has-text-centered is-half-mobile">
      {url ? <a href={url}>{image}</a> : image}
    </div>
  );
};

const SocialProof = ({ children, images = [] }) => {
  return (
    <div className="container my-5">
      <p className="py-5 is-size-6 has-text-centered">{children}</p>
      <div className="py-5 columns is-multiline is-mobile">
        {images.map((image) => (
          <Column {...image} />
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
