import React, { Children } from "react";

const Quote = ({ children }) => {
  return (
    <div className="px-6 mx-6 py-5 is-size-3 has-text-weight-light has-text-centered">
      “{children}”
    </div>
  );
};

export default Quote;
