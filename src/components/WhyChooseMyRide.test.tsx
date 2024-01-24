import React from "react";
import {
  getAllByText,
  getByLabelText,
  getByText,
  render,
} from "@testing-library/react";
import WhyChooseMyRide from "./WhyChooseMyRide";

describe("WhyChooseMyRide", () => {
  it("Header Rendering", () => {
    const { getByText } = render(<WhyChooseMyRide />);
    const Header = getByText(/best in class/i);

    expect(Header).toBeInTheDocument();
  });
  it("Basic Card Rendering", () => {
    const { getByText } = render(<WhyChooseMyRide />);
    const BasicCard = getByText(/The best balance of price/i);

    expect(BasicCard).toBeInTheDocument();
  });
});
