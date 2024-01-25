import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import IconsRadio from "./IconsRadio";
import ErrorIcon from "@mui/icons-material/Error";
import { countriesAndCities } from "../utils/countries-and-cities.ts";
import { useRideForm } from "../hook/useRideForm.ts";
import { z } from "zod";

const RideForm = () => {
  const {
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
  } = useRideForm();

  const OrangeSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#FBA403",
      "&:hover": {
        backgroundColor: alpha("#FBA403", theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#FBA403",
    },
  }));

  const label = { inputProps: { "aria-label": "I drive my own car checkbox" } };

  const onSubmit: SubmitHandler<z.infer<typeof rideFormSchema>> = (data) => {updateForm(data) };

  const Countries = Object.keys(countriesAndCities);

  return (
    <Box className="bg-cinzaEscuro py-10">
      <Box className="flex pt-10  gap-5 bg-cinzaForm mx-20 pl-10">
        <img src="cartoon-car.svg" alt="A cartoon of a yellow card" />
        <Box className="flex flex-col my-auto">
          <Typography className="text-laranja font-bold text-[27px]">
            Drive with MyRide
          </Typography>
          <Typography className="text-white">
            Register as a driver using the form below. Our team will assess and
            get back to you within 48 hours.
          </Typography>
        </Box>
      </Box>
      <Box component="div" className=" mx-20 py-5 px-8 bg-cinzaForm ">
        <form>
          <Stack>
            <TextField
              className="  w-full mb-5 text-laranja bg-cinzaForm  "
              id="full-name"
              variant="outlined"
              aria-label="Full Name Input"
              placeholder="Full Name"
              {...register("fullname")}
            />
            {errors.fullname ? (
              <Typography className="text-red-600 flex  gap-2 items-center -mt-2 mb-3">
                <ErrorIcon className="text-sm items-center" /> Invalid name
              </Typography>
            ) : null}
            <TextField
              className="w-full pb-5 text-white"
              id="EmailAdress"
              variant="outlined"
              aria-label="Email Adress Input"
              placeholder="Email Adress"
              {...register("email")}
            />
            {errors.email ? (
              <Typography className="text-red-600 flex  gap-2 items-center -mt-2 mb-3">
                {" "}
                <ErrorIcon className="text-sm items-center" /> Invalid email
              </Typography>
            ) : null}

            <Select
              className="w-full mb-5 text-white"
              labelId="Country"
              id="country-select"
              value={country}
              label="Country"
              {...register("country")}
              onChange={(event) => setCountry(event?.target.value)}
            >
              {Countries.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {errors.country ? (
              <Typography className="text-red-600 flex  gap-2 items-center -mt-2 mb-3">
                <ErrorIcon className="text-sm items-center" /> Invalid country
              </Typography>
            ) : null}
            <Select
              className="w-full mb-5 text-white  placeholder:text-white"
              labelId="City"
              id="city-select"
              value={city}
              label="City"
              placeholder="City"
              {...register("city")}
              onChange={(event) => setCity(event?.target.value)}
            >
              {country &&
                countriesAndCities[country].map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
            </Select>
            {errors.city ? (
              <Typography className="text-red-600 flex  gap-2 items-center -mt-2 mb-3">
                <ErrorIcon className="text-sm items-center" /> Invalid city
              </Typography>
            ) : null}
            <TextField
              className="w-full pb-5 text-white"
              id="referral-code"
              variant="outlined"
              aria-label="Referral Code Input"
              placeholder="Referral Code"
              {...register("referralcode")}
            />
            {errors.referralcode ? (
              <Typography className="text-red-600 flex  gap-2 items-center -mt-2 mb-3">
                <ErrorIcon className="text-sm items-center" /> Invalid code
              </Typography>
            ) : null}
            <Box className="flex justify-between flex-col pb-6 ">
              <Box className="w-full flex justify-between ">
                <Typography className="text-white">
                  I drive my own car
                </Typography>

                <OrangeSwitch
                  {...label}
                  checked={checked}
                  {...register("myowncar")}
                  onChange={handleChange}
                />
              </Box>
              {checked ? <IconsRadio /> : null}
            </Box>
            <Button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="bg-[#FBA403] max-w-[200px] h-[56px] text-white"
            >
              {" "}
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default RideForm;
