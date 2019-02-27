import { expect } from "chai";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Otherwise from "../Otherwise";

configure({ adapter: new Adapter() });

describe("<Otherwise />", () => {
  it("should render children when condition is true", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(<Otherwise condition={true}>{Children}</Otherwise>);
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it("should render children when condition is false", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(<Otherwise condition={false}>{Children}</Otherwise>);
    expect(wrapper.contains(Children)).to.equal(true);
  });
});
