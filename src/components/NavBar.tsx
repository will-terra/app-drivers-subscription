import {
  AppBar,
  Link,
  List,
  ListItem,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
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
        {" "}
        <img src="Logo.svg" alt="My ride logo"></img>{" "}
        <Tabs value={value} onChange={handleChange} aria-label="Navigation Links"
  role="navigation">
          <Tab className="text-[#FBA403]" label="Home" />
          <Tab className="text-white" label=" Getting a Taxi" />
          <Tab className="text-white" label="Mobile App" />
          <Tab className="text-white" label=" Contact Us" />
        </Tabs>
        {/* <List tabindex="0" className="flex ">
          <ListItem role="link" sx={{ color: "#FBA403"  }}>
            Home
          </ListItem>
          <ListItem role="link" sx={{ color: "#ffffff" }} >
            Getting a Taxi
          </ListItem>
          <ListItem role="link" sx={{ color: "#ffffff" }} >
            Mobile App
          </ListItem>
          <ListItem role="link" sx={{ color: "#ffffff" }} >
            Contact Us
          </ListItem>
        </List> */}
        <img src="header-icons.svg" alt="Notification and User icons"></img>
      </Toolbar>{" "}
    </AppBar>
  );
};

export default NavBar;
