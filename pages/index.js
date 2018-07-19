import React from "react";
import PropTypes from "prop-types";
import initialData from "../data/initial.json";
import getComponent from "../utils/getComponent";
import "../styles/main.scss";

const Page = ({ components }) => {
  const componentsToRender = components.map(({ name, data }) => {
    const Component = getComponent(name);
    return <Component key={name} {...data} />;
  });
  return <div className="container">{componentsToRender}</div>;
};

Page.getInitialProps = () => initialData;

Page.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Page;
