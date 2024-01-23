import { AppBar, Link, List, Toolbar } from "@mui/material";
// import "@fontsource/roboto/400.css";
import React from "react";

const NavBar = () => {
  return (
    <AppBar data-testid="NavBar" sx={{ background: "#242424" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <img src="Logo.svg" alt="My ride logo"></img>{" "}
        <List sx={{ display: "flex", gap: 5, fontFamily: "Roboto" }}>
          <Link sx={{ color: "#FBA403" }} href="#" underline="none">
            Home
          </Link>
          <Link sx={{ color: "#ffffff" }} href="#" underline="none">
            Getting a Taxi
          </Link>
          <Link sx={{ color: "#ffffff" }} href="#" underline="none">
            Mobile App
          </Link>
          <Link sx={{ color: "#ffffff" }} href="#" underline="none">
            Contact Us
          </Link>
        </List>
        <img src="header-icons.svg" alt="Notification and User icons"></img>
      </Toolbar>{" "}
    </AppBar>
  );
};

export default NavBar;
