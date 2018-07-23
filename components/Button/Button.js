import React from "react";
import propTypes from "prop-types";

import "./Button.scss";

export default function Button({ children }) {
  return (
    <button className="Button" type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string,
};

Button.defaultProps = {
  children: "Button",
};
