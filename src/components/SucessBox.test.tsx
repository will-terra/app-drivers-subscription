import React, { useState } from "react";
import { act, render, renderHook } from "@testing-library/react";
import SucessBox from "./SucessBox";
import { http } from "msw";
import { server } from "../mocks/server";

// afterEach(() => {
//   server.resetHandlers();
// });

describe("Success Box", () => {
  it("renders", async () => {
    const { getByText } = render(<SucessBox />);
    const welcomeMessage = getByText(/welcome/i);

    expect(welcomeMessage).toBeInTheDocument();
  });

  it("is getting", async () => {
      
  });
});
