import React from "react";
import propTypes from "prop-types";

import { CloseIcon } from "../../icons";

import "./InfoBox.scss";

export default function InfoBox({ headline, boldText, text }) {
  return (
    <div className="InfoBox">
      <div className="InfoBox__left-container">
        <div className="InfoBox__headline">{headline}</div>
        <div className="InfoBox__boldText">{boldText}</div>
      </div>
      <div className="InfoBox__text">{text}</div>
      <button className="InfoBox__close-button" type="button">
        <CloseIcon />
      </button>
    </div>
  );
}

InfoBox.propTypes = {
  headline: propTypes.string.isRequired,
  boldText: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
