import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom";

it("contains 3 NavLinks via shallow", () => {
    const numLinks = shallow(<Header />).find("NavLink").length;
    expect(numLinks).toEqual(3);
});

it("contains 3 NavLinks via mount", () => {
    const numLinks = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find('a').length;
    expect(numLinks).toEqual(3);
});