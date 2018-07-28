import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import CloseIcon from "./CloseIcon";

describe("CloseIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CloseIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
