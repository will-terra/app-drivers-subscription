import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useRideForm = () => {
  const rideFormSchema = z.object({
    fullname: z.string().trim().min(6).includes(" "),

    email: z.string().min(1).email(),

    country: z.string().min(1),

    city: z.string().min(1),

    referralcode: z.string().min(7).max(7).includes("-"),

    myowncar: z.boolean(),

    cartype: z.string().min(1),
  });

  type rideFormSchemaData = z.infer<typeof rideFormSchema>;

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<rideFormSchemaData>({ resolver: zodResolver(rideFormSchema) });

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [country, setCountry] = React.useState("");

  const [city, setCity] = React.useState("");

  function updateForm(data) {
    fetch("http://localhost:3000/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }



  const IconsAndTypes = [
    { icon: "sedan-icon.svg", type: "Sedan" },
    { icon: "suv-van-icon.svg", type: "SUV /Van" },
    { icon: "semy-luxury-icon.svg", type: "Semy Luxury" },
    { icon: "luxury-car-icon.svg", type: "Luxury Car" },
  ];

  const [selectedValue, setSelectedValue] = React.useState("Sedan");

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);}

  return {
    rideFormSchema,
    register,
    handleSubmit,
    errors,
    country,
    setCountry,
    city,
    setCity,
    checked,
    setChecked,
    handleChange,
    updateForm,
    IconsAndTypes,
    selectedValue, 
    setSelectedValue,
    handleChangeRadio,
  };
};
