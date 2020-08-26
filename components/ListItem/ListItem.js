import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ children, imageSrc, imageAlt = "" }) => {
  return (
    <div className="my-5">
      <div className="columns is-mobile is-vcentered">
        {imageSrc && (
          <div className="column is-narrow ">
            <img className={styles.image} src={imageSrc} alt={imageAlt} />
          </div>
        )}
        <div className="column">{children}</div>
      </div>
    </div>
  );
};

export default ListItem;
