import {
  HeaderMenu,
  Hero,
  InfoBox,
  RulingsGrid,
  SubmitBox,
  Footer
} from "../components";

import ComponentTypes from "../constants/ComponentTypes";

const COMPONENTS_BY_TYPE = {
  [ComponentTypes.HeaderMenu]: HeaderMenu,
  [ComponentTypes.Hero]: Hero,
  [ComponentTypes.InfoBox]: InfoBox,
  [ComponentTypes.RulingsGrid]: RulingsGrid,
  [ComponentTypes.SubmitBox]: SubmitBox,
  [ComponentTypes.Footer]: Footer
};

export default component => COMPONENTS_BY_TYPE[component];
