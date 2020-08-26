import React from "react";

const SectionHeadline = ({ children, isUppercase = true }) => {
  return (
    <h3
      className={`title is-2 has-text-weight-light ${
        isUppercase ? "is-uppercase" : ""
      }`}
    >
      {children}
    </h3>
  );
};

export default SectionHeadline;
