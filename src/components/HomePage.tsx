import {
  Box,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

const HomePage = () => {
  return (
    <Box className="bg-[#242424] flex justify-evenly gap-2 pt-36 pb-20">
      <img
        src="myRideYellowCar.svg"
        alt="a yellow car with the my ride logo on street"
        width="610px"
        data-testid="YellowCarImage"
      />{" "}
      <Box className=" mt-20 ">
        <Box className="mb-5">
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#FFFFFF",
              fontSize: "26px",
            }}
          >
            {" "}
            Need a ride?
          </Typography>
          <Typography
            sx={{ color: "#ffffff", fontSize: "50px", fontWeight: 700 }}
          >
            Book with{" "}
            <span
              style={{ color: "#FBA403", fontStyle: "italic", fontWeight: 500 }}
            >
              my
            </span>
            <span
              style={{
                color: "#FBA403",
                fontStyle: "italic",
                textTransform: "uppercase",
              }}
            >
              ride{" "}
            </span>{" "}
            now!
          </Typography>
        </Box>

        <FormGroup className="bg-[#2c2c2c] py-6 px-5 w-[610px]">
          <FormLabel className="text-white font-bold text-base mb-2">
            Find a ride now
          </FormLabel>
          <InputLabel
            sx={{ color: "#ffffff" }}
            id="your-pickup"
            aria-label="Your pickup select"
          >
            Your Pickup
          </InputLabel>
          <Select
            className="text-white mb-2  border-white"
            id="your-pickup-select"
            value={0}
            label="Select your pickup"
            aria-labelledby="your-pickup-select"
          >
            <MenuItem aria-label="Select" value={0}>Current Location </MenuItem>
          </Select>
          <TextField
            className="text-white mb-2  border-white focus:border-[FBA403]"
            inputProps={{
              className:
                "bg-cinzaForm h-[36px] text-white rounded outline outline-1 outline-white placeholder-white	",
            }}
            sx={{ color: "#FFFFFF !important" }}
            id="outlined-basic"
            label="Your Destination"
            variant="outlined"
          />
          <Button className="bg-[#FBA403] text-white">
            {" "}
            <SearchIcon /> &nbsp; Find a driver
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default HomePage;
