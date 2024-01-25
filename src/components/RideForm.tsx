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
import React from "react";
import IconsRadio from "./IconsRadio";
import { FormControl } from "@mui/base";

type Inputs = {
  "Full Name": string;
  "Email Adress": string;
  Country: string;
  City: string;
  "Referral Code": string;
};

const RideForm = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(JSON.stringify(data));
  };

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
      <Box component="form" className=" mx-20 py-5 px-8 bg-cinzaForm ">
        <FormControl defaultValue={""} required>
          <Stack>
            <TextField
              className=" 
               w-full mb-5 text-laranja bg-cinzaForm  "
              id="full-name"
              variant="outlined"
              aria-label="Full Name Input"
              placeholder="Full Name"
              {...register("Full Name")}
            />

            <TextField
              className="w-full pb-5 text-white"
              id="email"
              variant="outlined"
              aria-label="Email Adress Input"
              placeholder="Email Adress"
              {...register("Email Adress")}
            />

            <Select
              className="w-full mb-5 text-white"
              labelId="Country"
              id="country-select"
              value={""}
              label="Country"
              //   onChange={handleChange}
              {...register("Country")}
            >
              <MenuItem value={"Singapore"}>Singapore</MenuItem>
            </Select>

            <Select
              className="w-full mb-5 text-white"
              labelId="City"
              id="city-select"
              value={""}
              label="City"
              placeholder="City"
              //   onChange={handleChange}
              {...register("City")}
            >
              {" "}
              <MenuItem value={""}>Alguma Cidade</MenuItem>
            </Select>

            <TextField
              className="w-full pb-5 text-white"
              id="referral-code"
              variant="outlined"
              aria-label="Referral Code Input"
              placeholder="Referral Code"
              {...register("Referral Code")}
            />

            <Box className="flex justify-between flex-col pb-6 ">
              <Box className="w-full flex justify-between ">
                <Typography className="text-white">
                  I drive my own car
                </Typography>

                <OrangeSwitch
                  {...label}
                  checked={checked}
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
        </FormControl>
      </Box>
    </Box>
  );
};

export default RideForm;
