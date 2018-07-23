import React from "react";
import propTypes from "prop-types";

import { ThumpIcon } from "../../icons";

import "./Hero.scss";

export default function Hero({ headline, title, content, bottomline }) {
  return (
    <div className="Hero">
      <div className="Hero__container">
        <div className="Hero__opinion-box">
          <div className="Hero__opinion-box-container">
            <div className="Hero__opinion-box-container-background" />
            <div className="Hero__opinion-box-container-content">
              <div className="Hero__opinion-box-headline">{headline}</div>
              <div className="Hero__opinion-box-title">{title}</div>
              <div className="Hero__opinion-box-content">{content}</div>
              <a className="Hero__opinion-box-cta">More information</a>
              <div className="Hero__opinion-box-bottomline">{bottomline}</div>
            </div>
          </div>
          <div className="Hero__opinion-box-button-container">
            <button
              className="Hero__opinion-box-button Hero__opinion-box-button--thumbs-up"
              type="button"
            >
              <ThumpIcon />
            </button>
            <button
              className="Hero__opinion-box-button Hero__opinion-box-button--thumbs-down"
              type="button"
            >
              <ThumpIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="Hero__counter">
        <div className="Hero__counter-label">CLOSING IN</div>
        <div className="Hero__counter-days">
          <span className="Hero__counter-days-number">22</span> days
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  headline: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  bottomline: propTypes.string.isRequired,
};
