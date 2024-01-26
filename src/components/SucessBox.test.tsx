import React, { useState } from "react";
import { act, render, renderHook } from "@testing-library/react";
import SucessBox from "./SucessBox";
import { http } from "msw";
import { server } from "../mocks/server";

// afterEach(() => {
//   server.resetHandlers();
// });

describe("Success Box", () => {
  it("formData useState", async () => {
    // const { findByText } = render(<SucessBox />);
    // const name = findByText(/william/i);
    // expect(await name).toBeInTheDocument();
    // const { result } = renderHook(formData);
    // act(() => {
    //   result.current.
    // })
    // const NavBarLogo = getByTestId("NavBar");
    // expect(NavBarLogo).toBeInTheDocument();
  });
});
