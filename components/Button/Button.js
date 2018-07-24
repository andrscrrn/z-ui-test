import React from "react";
import propTypes from "prop-types";

import "./Button.scss";

export default function Button({ children, className }) {
  return (
    <button className={`Button ${className}`} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string,
  className: propTypes.string,
};

Button.defaultProps = {
  children: "Button",
  className: "",
};
