import data from "../data.json";
import getComponent from "../utils/getComponent";
import css from "../styles/main.scss";

const Page = ({ components }) => {
  const componentsToRender = components.map(({ name, data }) => {
    const Component = getComponent(name);
    return <Component data={data} key={name} />;
  });
  return <div className={css.main}>{componentsToRender}</div>;
};

Page.getInitialProps = () => data;

export default Page;
