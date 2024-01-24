import { Tab, Tabs, TabsList } from "@mui/base";
import { AppBar, Toolbar } from "@mui/material";
// import "@fontsource/roboto/400.css";
import React from "react";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar data-testid="NavBar" sx={{ background: "#242424" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src="Logo.svg" alt="My ride logo"></img>
        <Tabs>
          <TabsList
            className="flex gap-10"
            value={value}
            onChange={handleChange}
            aria-label="Navigation Links"
            role="navigation"
          >
            <Tab className="text-[#FBA403]" value={0}>
              Home
            </Tab>
            <Tab className="text-white" value={1}>
              Getting a Taxi
            </Tab>
            <Tab className="text-white" value={2}>
              Mobile App
            </Tab>
            <Tab className="text-white" value={3}>
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
