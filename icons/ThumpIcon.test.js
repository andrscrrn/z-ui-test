import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import ThumpIcon from "./ThumpIcon";

describe("ThumpIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ThumpIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
