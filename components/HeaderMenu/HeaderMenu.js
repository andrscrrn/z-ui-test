import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import SearchIcon from "../../icons/SearchIcon";

import "./HeaderMenu.scss";

export default function HeaderMenu({ title, items }) {
  const loginItem = { label: "Log In / Sign Up", url: "#" };
  return (
    <div className="HeaderMenu">
      <div className="HeaderMenu__container">
        <h2 className="HeaderMenu__title">{title}</h2>
        <ul className="HeaderMenu__list">
          {[...items, loginItem].map(({ label, url }) => (
            <li key={label} className="HeaderMenu__list-item">
              <Link href={url}>
                <a className="HeaderMenu__link">{label}</a>
              </Link>
            </li>
          ))}
          <li className="HeaderMenu__list-item">
            <Link href="#">
              <a>
                <SearchIcon />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

HeaderMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()),
};

HeaderMenu.defaultProps = {
  title: "",
  items: [],
};
