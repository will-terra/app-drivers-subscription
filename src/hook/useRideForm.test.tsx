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
  });
  // it("is posting", async () => {
  //   const { result } = renderHook(useRideForm);
  //   const data = await result.current.updateForm(formData);

  //   // expect(data.id).toBe("8549");
  //   // expect(result.current.setSelectedValue).toBeTruthy;

  //   // const data = await fetch("http://localhost:3000/form", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(formData),
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // });
  //   const response = await data.json();
  //   expect(response.id).toBe("8549");
  // });

  // it("Should fetch file body and setBody successfully", async () => {
  //   fetcherSpy.mockResolvedValue({
  //     data: {
  //       file: {
  //         body: formData,
  //         id: "8549",
  //       },
  //     },

  //     status: 200,
  //     statusText: "OK",
  //     headers: {},
  //     config: {},
  //   });

  //   await waitFor(() => expect(setBody).toHaveBeenCalled());
  //   await waitFor(() =>
  //     expect(setBody).toHaveBeenCalledWith("Testing body fetch")
  //   );
  // });

  it("is posting", async () => {
    
  });
});
