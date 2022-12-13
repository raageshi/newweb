import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Paper, Chip, Divider, Avatar, Tabs, Tab } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Layout.css";
import Stack from "@mui/material/Stack";
import mylogo from "../src/resource/logo.jpg";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import MenuList from "./Components/MenuList";
import Dashboard from "./Components/Dashboard";
import backgroundimage from './resource/358473.jpg';

const Layout = () => {
  const [expandWidth, setMenuWidth] = React.useState(70);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <div id="maindiv">
      <Stack sx={{ height: "calc(100% - 82px)" }}>
        <ResponsiveAppBar />
        <MenuList></MenuList>
        <Stack
          direction="row"
          sx={{
            height: window.innerHeight - 142,
            justifyContent: "flex-end",
            marginTop: "70px",
          }}
        >
          <Box sx={{ minWidth: expandWidth + 10 }}>
            <Paper
              elevation={0.5}
              id="menu-box"
              sx={{
                width: expandWidth,
                maxWidth: "100%",
                fontWeight: "bold",
                height:
                  window.innerWidth < 1024
                    ? window.innerHeight + 32
                    : window.innerHeight + 22,
              }}
            ></Paper>
          </Box>

          {/* Page Body */}
          <Box sx={{ height:'100%', width: "100%" }}>
            <Container
              sx={{
               width:'100%',height:'100%'
              }}
            >
              <div id = 'box' style={{backgroundImage:`url(${backgroundimage})`,width:'100%',height:'100%'}}>
                
              </div>
            </Container>
          </Box>
        </Stack>

        {/* Footer */}
      </Stack>
    </div>
  );
};
export default Layout;
