import React from "react";
import {
  fireEvent,
  getByDisplayValue,
  getByLabelText,
  getByRole,
  getByTestId,
  render,
  renderHook,
} from "@testing-library/react";
import RideForm from "./RideForm";
import { useRideForm } from "../hook/useRideForm";

describe("RideForm", () => {
  it("Image rendering", () => {
    const { getByAltText } = render(<RideForm />);
    const carImage = getByAltText(/cartoon/i);
    expect(carImage).toBeInTheDocument();
  });

  it("Form Submmit", () => {
    const { getByTestId, getByRole } = render(<RideForm />);
    const onSubmit = jest.fn();
    const handleSubmit = jest.fn(onSubmit);

    const fullname = getByTestId(/fullname/i);
    fireEvent.change(fullname, { target: { value: "Test Name" } });
    expect(fullname).toHaveValue("Test Name");

    const email = getByTestId(/email/i);
    fireEvent.change(email, { target: { value: "test@test.com" } });
    expect(email).toHaveValue("test@test.com");

    const countrySelect = getByTestId(/country/i);
    fireEvent.change(countrySelect, { target: { value: "Argentina" } });
    expect(countrySelect).toHaveValue("Argentina");

    const citySelect = getByTestId(/city/i);
    fireEvent.change(citySelect, { target: { value: "Buenos Aires" } });
    expect(citySelect).toHaveValue("Buenos Aires");

    const referralcode = getByTestId(/referralcode/i);
    fireEvent.change(referralcode, { target: { value: "AAA-111" } });
    expect(referralcode).toHaveValue("AAA-111");

    const myowncar = getByTestId(/myowncar/i);
    fireEvent.click(myowncar);
    expect(myowncar).toBeChecked;

    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleSubmit(onSubmit)).toHaveBeenCalled();
  });
});
