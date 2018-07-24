import React from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";

import "./SubmitBox.scss";

export default function SubmitBox({ text, button }) {
  return (
    <div className="SubmitBox">
      <div className="SubmitBox__content">
        {text}
        <Button className="SubmitBox__button">{button.text}</Button>
      </div>
      <div className="SubmitBox__overlay" />
    </div>
  );
}

SubmitBox.propTypes = {
  text: propTypes.string.isRequired,
  button: propTypes.shape({
    text: propTypes.string,
  }).isRequired,
};
