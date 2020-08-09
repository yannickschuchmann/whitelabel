import React from "react";

const MediaContent = ({
  children,
  imageSrc,
  imageAlt,
  title,
  mediaPosition = "left",
}) => {
  const columns = [
    <div className="column">
      <img src={imageSrc} alt={imageAlt} />
    </div>,
    <div className="column">
      <div className="px-6">
        <h3 class="title is-3 is-uppercase has-text-weight-light">{title}</h3>
        {children}
      </div>
    </div>,
  ];

  if (mediaPosition === "right") {
    columns.reverse();
  }

  return (
    <div className="container my-4 py-5">
      <div className="columns is-vcentered">{columns}</div>
    </div>
  );
};

export default MediaContent;
