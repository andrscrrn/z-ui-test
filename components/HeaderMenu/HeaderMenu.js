import React from "react";
import PropTypes from "prop-types";

import "./HeaderMenu.scss";

export default function HeaderMenu({ title }) {
  return (
    <div className="HeaderMenu">
      <h2 className="HeaderMenu__title">{title}</h2>
    </div>
  );
}

HeaderMenu.propTypes = {
  title: PropTypes.string.isRequired,
};
