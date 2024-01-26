import React, { useState } from "react";
import { act, getByTestId, render, renderHook } from "@testing-library/react";
import SucessBox from "./SucessBox";
import { http } from "msw";
import { server } from "../mocks/server";
import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";

describe("Success Box", () => {
  it("renders", async () => {
    const { getByText } = render(<SucessBox />);
    const welcomeMessage = getByText(/welcome/i);

    expect(welcomeMessage).toBeInTheDocument();
  });

  it("render car type", () => {
    const formData = {
      myowncar: true,
    };

    const { getByTestId } = render(<SucessBox />);
    const carTypeText = getByTestId("cartype");

    expect(carTypeText).toBeInTheDocument();
  });
});
