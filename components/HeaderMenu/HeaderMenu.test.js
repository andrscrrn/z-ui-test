import React from "react";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import HeaderMenu from "./HeaderMenu";

Enzyme.configure({ adapter: new Adapter() });

describe("HeaderMenu", () => {
  it("renders correctly", () => {
    const props = {
      title: "",
      items: [],
    };
    const wrapper = shallow(<HeaderMenu {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
