import React from "react";
import propTypes from "prop-types";

import RulingsGridItem from "./RulingsGridItem";

import "./RulingsGrid.scss";

export default function RulingsGrid({ title, rulings }) {
  return (
    <div className="RulingsGrid">
      <div className="RulingsGrid__title">{title}</div>
      <div className="RulingsGrid__grid">
        {rulings.map(ruling => (
          <RulingsGridItem key={ruling.name} {...ruling} />
        ))}
      </div>
    </div>
  );
}

RulingsGrid.propTypes = {
  title: propTypes.string.isRequired,
  rulings: propTypes.arrayOf(propTypes.shape(RulingsGridItem.propTypes))
    .isRequired,
};
