import React from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";
import { ThumpSmallIcon } from "../../icons";

import "./RulingsGridItem.scss";

export default function RulingsGridItem({ name, imageUrl, description }) {
  return (
    <div className="RulingsGridItem">
      <div className="RulingsGridItem__image-container">
        <img className="RulingsGridItem__image" alt={name} src={imageUrl} />
        <div className="RulingsGridItem__image-gradient" />
      </div>
      <div className="RulingsGridItem__content">
        <div className="RulingsGridItem__name">{name}</div>
        <div className="RulingsGridItem__description">{description}</div>
        <Button className="RulingsGridItem__cta">View Full Report</Button>
      </div>
      <div className="RulingsGridItem__votes">
        <div className="RulingsGridItem__votes-item RulingsGridItem__votes-item--left">
          <ThumpSmallIcon />
          <span className="RulingsGridItem__votes-item-text">64</span>
        </div>
        <div className="RulingsGridItem__votes-item RulingsGridItem__votes-item--right">
          <span className="RulingsGridItem__votes-item-text">36</span>
          <ThumpSmallIcon />
        </div>
      </div>
    </div>
  );
}

RulingsGridItem.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  //   url: propTypes.string.isRequired,
  //   timestamp: propTypes.number.isRequired,
  //   category: propTypes.string.isRequired,
  //   goodVotes: propTypes.number.isRequired,
  //   badVotes: propTypes.number.isRequired,
};
