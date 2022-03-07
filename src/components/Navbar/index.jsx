import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BaseButton } from "./NavbarElements";
import Container from "@mui/material/Container";
import "./NavbarStyle.css";

const Navbar = () => {
  const [shadowNav, setShadowNav] = useState(false);

  const changeShadow = () => {
    if (window.screenY >= 80) {
      setShadowNav(true);
    } else {
      setShadowNav(false);
    }
  };

  window.addEventListener("scroll", changeShadow);

  return (
    <>
      <Box
        className={shadowNav ? "active" : " "}
        sx={{
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          position: "sticky",
          top: 0,
          zIndex: 2,
          ["@media screen and (max-width: 960px)"]: {
            transition: "0.8s all ease",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1,
            width: "100%",
            padding: "10px",
          }}
        >
          {/*         <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#333" }}
          >
            Logo
          </Typography>
          <BaseButton>
            <GitHubIcon sx={{ color: "#ff414d" }} />
          </BaseButton>
          <BaseButton>
            <AccountCircleIcon sx={{ color: "#ff414d" }} />
          </BaseButton>
          <BaseButton>
            <SettingsIcon sx={{ color: "#ff414d" }} />
          </BaseButton>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
