import { Tab, Tabs, TabsList } from "@mui/base";
import { AppBar, Toolbar } from "@mui/material";
// import "@fontsource/roboto/400.css";
import React from "react";

const NavBar = () => {
  return (
    <AppBar className="bg-cinzaEscuro hidden md:flex" data-testid="NavBar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img  aria-hidden src="Logo.svg" alt="My ride logo"></img>
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
        <img aria-hidden src="header-icons.svg" alt="Notification and User icons"></img>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
