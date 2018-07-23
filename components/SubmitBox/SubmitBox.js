import React from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";

import "./SubmitBox.scss";

export default function SubmitBox({ text, button }) {
  return (
    <div className="SubmitBox">
      {text}
      <Button>{button.text}</Button>
    </div>
  );
}

SubmitBox.propTypes = {
  text: propTypes.string.isRequired,
  button: propTypes.shape({
    text: propTypes.string,
  }).isRequired,
};
