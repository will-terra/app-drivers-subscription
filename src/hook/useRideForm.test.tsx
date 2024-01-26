import React, { useState } from "react";
import {act, render, renderHook} from "@testing-library/react"
import {useRideForm} from "./useRideForm";

global.fetch = jest.fn(()=> Promise.resolve({
  json: () => Promise.resolve({
    "id": "8549",
    "fullname": "William Pereira Terra",
    "email": "william.p.terra@gmail.com",
    "country": "Barbados",
    "city": "Pine Housing Estate",
    "referralcode": "aaa-111",
    "myowncar": true,
    "cartype": "SUV /Van"
  })

}))

describe("useRideForm Hook", () => {
    it("handleChange and setChecked", () => {

      const { result } = renderHook(useRideForm);
      act(() => {
        result.current.setChecked
      })

      expect(result.current.checked).toBeChecked

      act(() => {
        result.current.handleChange
      })

      expect(result.current.checked).toBeTruthy

    });
    it(" handleChangeRadio and setSelectedValue", () => {

      const { result } = renderHook(useRideForm);
      act(() => {
        result.current.handleChangeRadio
      })

      expect(result.current.setSelectedValue).toBeTruthy
     
    });
    it(" is fetching", async () => {

      const { result } = renderHook(useRideForm);
     
      expect(result.current.setSelectedValue).toBeTruthy
     
    });
    
  });