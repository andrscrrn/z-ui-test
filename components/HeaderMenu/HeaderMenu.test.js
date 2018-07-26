import React from "react";
import { shallow, render } from "enzyme";
import toJson from "enzyme-to-json";

import HeaderMenu from "./HeaderMenu";

describe("HeaderMenu", () => {
  const props = {
    title: "Rule of Thumb.",
    items: [
      {
        label: "Past Trials",
        url: "past-trials",
      },
      {
        label: "How It Works",
        url: "how-it-works",
      },
    ],
  };

  it("renders correctly without props", () => {
    const wrapper = shallow(<HeaderMenu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders an extra item", () => {
    const wrapper = shallow(<HeaderMenu {...props} />);
    expect(wrapper.find(".HeaderMenu__link").length).toBe(3);
  });

  it("renders the default login item at the end", () => {
    const wrapper = shallow(<HeaderMenu {...props} />);
    const links = wrapper.find(".HeaderMenu__link");
    const lastItem = links.last();
    expect(lastItem.text()).toBe("Log In / Sign Up");
  });

  it("renders a search icon as a last item of the list", () => {
    const wrapper = render(<HeaderMenu {...props} />);
    const listItems = wrapper.find(".HeaderMenu__list-item");
    const lastItem = listItems.last();
    expect(lastItem.find("svg").length).toBe(1);
  });
});
