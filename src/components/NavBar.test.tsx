import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("Logo Rendering", () => {
    const { getByTestId } = render(<NavBar />);
    const NavBarLogo = getByTestId("NavBar");

    expect(NavBarLogo).toBeInTheDocument();
  });
  it("Tabs Rendering", () =>{
    const {getByRole} = render(<NavBar/>);
    const NavBarTabs = getByRole("navigation");

    expect(NavBarTabs).toBeInTheDocument()
  })

  it("Icons Rendering", () => {
    const {getByAltText} = render(<NavBar/>);
    const NavBarIcons = getByAltText(/icons/i)
    expect(NavBarIcons).toBeInTheDocument()
  })
});