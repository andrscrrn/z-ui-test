import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import HeaderMenu from "./HeaderMenu";

describe("HeaderMenu", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HeaderMenu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
