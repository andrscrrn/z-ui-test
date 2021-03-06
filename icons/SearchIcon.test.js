import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import SearchIcon from "./SearchIcon";

describe("SearchIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SearchIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
