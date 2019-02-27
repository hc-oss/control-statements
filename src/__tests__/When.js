import { expect } from "chai";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import When from "../When";

configure({ adapter: new Adapter() });

describe("<When />", () => {
  it("should render children when condition is true", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(<When condition={true}>{Children}</When>);
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it("should not render children when condition is false", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(<When condition={false}>{Children}</When>);
    expect(wrapper.contains(Children)).to.equal(false);
  });
});
