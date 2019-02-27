import { expect } from "chai";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import If from "../If";

configure({ adapter: new Adapter() });

describe("<If />", () => {
  it("should render children when condition is true", () => {
    const Children = <div>Hello</div>;
    const wrapper = mount(<If condition={true}>{Children}</If>);
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it("should not render children when condition is false", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(<If condition={false}>{Children}</If>);
    expect(wrapper.contains(Children)).to.equal(false);
  });
});
