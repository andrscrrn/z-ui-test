import React from "react";
import propTypes from "prop-types";

import "./Button.scss";

export default function Button({ children, className, onClick }) {
  return (
    <button className={`Button ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};

Button.defaultProps = {
  children: "Button",
  className: "",
  onClick: () => {},
};
