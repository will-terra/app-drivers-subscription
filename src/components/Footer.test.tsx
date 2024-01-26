import React from "react";
import { getByAltText, getByTestId, render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("Logo Rendering", () => {
    const { getByAltText } = render(<Footer />);
    const rideLogo = getByAltText(/ride logo/i);

    expect(rideLogo).toBeInTheDocument();
  });
  it("Text Rendering", () =>{
    const {getByText} = render(<Footer/>);
    const renderedText = getByText(/company/i);

    expect(renderedText).toBeInTheDocument()
  })

  it("Icons Rendering", () => {
    const {getByAltText} = render(<Footer/>);
    const socialMediaIcons = getByAltText(/social media/i)
    expect(socialMediaIcons).toBeInTheDocument()
  })
});