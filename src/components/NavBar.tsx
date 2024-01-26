import { Tab, Tabs, TabsList } from "@mui/base";
import { AppBar, Toolbar } from "@mui/material";
// import "@fontsource/roboto/400.css";
import React from "react";

const NavBar = () => {
  return (
    <AppBar data-testid="NavBar" sx={{ background: "#242424" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src="Logo.svg" alt="My ride logo"></img>
        <Tabs defaultValue={0}>
          <TabsList className="flex gap-10 ">
            <Tab className="text-laranja font-roboto" value={0}>
              Home
            </Tab>
            <Tab className="text-white font-roboto" value={1}>
              Getting a Taxi
            </Tab>
            <Tab className="text-white font-roboto" value={2}>
              Mobile App
            </Tab>
            <Tab className="text-white font-roboto" value={3}>
              Contact Us
            </Tab>
          </TabsList>
        </Tabs>
        <img src="header-icons.svg" alt="Notification and User icons"></img>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
