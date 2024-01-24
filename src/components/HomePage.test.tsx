import React from "react";
import { getByAltText, render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("Image Rendering", () => {
    const { getByAltText } = render(<HomePage />);
    const HomePageImage = getByAltText(/yellow car/i);

    expect(HomePageImage).toBeInTheDocument();
  });
  it("Form Rendering", () => {
    const { getByLabelText } = render(<HomePage />);
    const HomePageForm = getByLabelText(/your pickup/i);

    expect(HomePageForm).toBeInTheDocument();
  });

});
