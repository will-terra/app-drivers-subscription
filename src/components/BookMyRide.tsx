import { Typography } from "@mui/material";
import React from "react";

const BookMyRide = () => {
  return (
    <>
      <img
        src="myRideYellowCar.svg"
        alt="a yellow car with the my ride logo on street"
      />{" "}
      <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
        Need a ride
      </Typography>
      <Typography variant="h3" sx={{fontWeight: 700}}>
        Book with <span style={{ color: "#FBA403", fontStyle: "italic", fontWeight: 500 }}>my</span><span style={{ color: "#FBA403", fontStyle: "italic", }}>RIDE </span> now!
      </Typography>
    </>
  );
};

export default BookMyRide;
