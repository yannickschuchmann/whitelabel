import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ url, icon }) => {
  return (
    <a href={url}>
      <span class="icon has-text-dark is-large fa-lg">
        <FontAwesomeIcon icon={["fab", icon]} />
      </span>
    </a>
  );
};

export default SocialButton;
