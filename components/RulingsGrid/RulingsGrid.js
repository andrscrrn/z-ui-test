import React from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";

import "./RulingsGrid.scss";

export default function RulingsGrid({ title, rulings }) {
  return (
    <div className="RulingsGrid">
      <div className="RulingsGrid__title">{title}</div>
      <div className="RulingsGrid__grid">
        {rulings.map(({ name, imageUrl, description }) => (
          <div className="RulingsGrid__grid-item" key={name}>
            <img
              className="RulingsGrid__grid-item-image"
              alt={name}
              src={imageUrl}
            />
            <div className="RulingsGrid__grid-item-content">
              <div className="RulingsGrid__grid-item-name">{name}</div>
              <div className="RulingsGrid__grid-item-description">
                {description}
              </div>
              <Button>View Full Report</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

RulingsGrid.propTypes = {
  title: propTypes.string.isRequired,
  rulings: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      imageUrl: propTypes.string.isRequired,
      url: propTypes.string.isRequired,
      timestamp: propTypes.number.isRequired,
      category: propTypes.string.isRequired,
      goodVotes: propTypes.number.isRequired,
      badVotes: propTypes.number.isRequired,
    }),
  ).isRequired,
};
