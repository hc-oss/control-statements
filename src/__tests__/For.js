import { expect } from "chai";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import For from "../For";

configure({ adapter: new Adapter() });

describe("<For />", () => {
  it("should render children with length 3", () => {
    const Children = <div>Hello</div>;
    const items = [0, 1, 2];
    const wrapper = mount(
      <For of={items} each="$item">
        {Children}
      </For>
    );
    expect(wrapper.children()).to.have.length(items.length);
  });
});
