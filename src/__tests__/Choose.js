import { expect } from "chai";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Choose from "../Choose";
import When from "../When";

configure({ adapter: new Adapter() });

describe("<Choose />", () => {
  it("should not accept span", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(<Choose>{Children}</Choose>);
    expect(wrapper.contains(Children)).to.equal(false);
  });
  it("should accept When", () => {
    const Children = <div>Hai</div>;
    const wrapper = mount(
      <Choose>
        <When condition={true}>{Children}</When>}
      </Choose>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });
});
