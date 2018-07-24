import React from "react";
import propTypes from "prop-types";

import "./Footer.scss";

export default function Footer({ links }) {
  return (
    <div className="Footer">
      <div className="Footer__links">
        {links.map(({ label, url }) => (
          <a className="Footer__link" href={url} key={label}>
            {label}
          </a>
        ))}
      </div>
      <div className="Footer__social-links">
        <span>Follow Us</span>
      </div>
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
