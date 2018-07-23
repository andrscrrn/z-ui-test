import React from "react";
import propTypes from "prop-types";

import "./Footer.scss";

export default function Footer({ links }) {
  return (
    <div className="Footer">
      {links.map(({ label, url }) => (
        <a href={url} key={label}>
          {label}
        </a>
      ))}
    </div>
  );
}

Footer.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      url: propTypes.string,
    }),
  ).isRequired,
};
