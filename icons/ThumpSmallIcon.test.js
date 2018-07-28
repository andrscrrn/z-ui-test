import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import ThumpSmallIcon from "./ThumpSmallIcon";

describe("ThumpSmallIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ThumpSmallIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
