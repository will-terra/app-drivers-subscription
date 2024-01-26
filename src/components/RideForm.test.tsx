import React from "react";
import {  render } from "@testing-library/react";
import RideForm from "./RideForm";

describe("RideForm", () => {
  it("Image rendering", () => {
    const { getByAltText } = render(<RideForm />);
    const carImage = getByAltText(/cartoon/i);
    expect(carImage).toBeInTheDocument();
  });
});
