import { FormControl } from "@mui/base";
import {
  Box,
  Input,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {};

const RideForm = (props: Props) => {
  return (
    <Box className="bg-cinzaEscuro py-10">
      <Box className="flex pt-10  gap-5 bg-cinzaForm mx-20 pl-10">
        <img src="cartoon-car.svg" />
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
      <Box component="form" className=" mx-20 py-5 px-8 bg-cinzaForm ">
        <FormControl defaultValue={""} required>
          <Stack>
            <TextField
              className="w-full pb-5 text-white"
              id="full-name"
              variant="outlined"
              aria-label="Full Name Input"
              placeholder="Full Name"
            />
            <TextField
              className="w-full pb-5 text-white"
              id="email"
              variant="outlined"
              aria-label="Email Adress Input"
              placeholder="Email Adress"
            />
            <Select
              className="w-full mb-5 text-white"
              labelId="Country"
              id="country-select"
              //   value={country}
              label="Country"
              aria-label="Country select"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Singapore</MenuItem>
            </Select>
            <Select
              className="w-full mb-5 text-white"
              labelId="City"
              id="city-select"
              //   value={country}
              label="City"
              aria-label="City select"
              placeholder="City"
              //   onChange={handleChange}
            ></Select>
            <TextField
              className="w-full pb-5 text-white"
              id="referral-code"
              variant="outlined"
              aria-label="Referral Code Input"
              placeholder="Referral Code"
            />
            {/* <Switch
              slots={{
                root: Root,
              }}
              {...label}
            /> */}
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RideForm;
