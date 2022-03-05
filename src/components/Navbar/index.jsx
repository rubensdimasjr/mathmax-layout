import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BaseButton } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          /*        marginTop: -80px;, */
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          position: "sticky",
          top: 0,
          zIndex: 2,
          padding: "5px 10px",
          "& @media screen and (max-width: 960px)": {
            transition: "0.8s all ease",
          },
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#333" }}
        >
          Menu
        </Typography>
        <BaseButton>
          <GitHubIcon color="primary" />
        </BaseButton>
        <BaseButton>
          <AccountCircleIcon color="primary" />
        </BaseButton>
        <BaseButton>
          <SettingsIcon color="primary" />
        </BaseButton>
      </Box>
    </>
  );
};

export default Navbar;
