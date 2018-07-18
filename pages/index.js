import React from "react";
import PropTypes from "prop-types";
import initialData from "../data.json";
import getComponent from "../utils/getComponent";
import css from "../styles/main.scss";

const Page = ({ components }) => {
  const componentsToRender = components.map(({ name, data }) => {
    const Component = getComponent(name);
    return <Component data={data} key={name} />;
  });
  return <div className={css.main}>{componentsToRender}</div>;
};

Page.getInitialProps = () => initialData;

Page.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Page;
