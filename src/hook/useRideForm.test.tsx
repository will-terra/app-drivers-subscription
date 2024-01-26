import React, { useState } from "react";
import { act, render, renderHook, waitFor } from "@testing-library/react";
import { useRideForm } from "./useRideForm";
import * as fetchService from "../service/fetcher";

describe("useRideForm Hook", () => {
  it("handleChange and setChecked", () => {
    const { result } = renderHook(useRideForm);
    act(() => {
      result.current.setChecked;
    });

    expect(result.current.checked).toBeChecked;

    act(() => {
      result.current.handleChange;
    });

    expect(result.current.checked).toBeTruthy;
  });
  it("handleChangeRadio and setSelectedValue", () => {
    const { result } = renderHook(useRideForm);
    act(() => {
      result.current.handleChangeRadio;
    });

    expect(result.current.selectedValue).toBeTruthy();
    expect(result.current.setSelectedValue).toHaveBeenCalled;
    expect(result.current.handleChangeRadio).toHaveBeenCalled;
  });
});
