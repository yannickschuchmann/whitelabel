import React from "react";

const SegmentsItem = ({ children, title }) => {
  return (
    <div className="column is-half">
      <div className="mt-6 mb-5">
        <strong className="is-family-secondary is-uppercase is-size-4">
          {title}
        </strong>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SegmentsItem;
