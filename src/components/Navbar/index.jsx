import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BaseButton, NavBtnLink } from "./NavbarElements";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          position: "sticky",
          top: 0,
          zIndex: 2,
          height: "60px",
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
            <NavBtnLink to="signin">
              <AccountCircleIcon
                sx={{
                  fontSize: "32px",
                }}
              />
            </NavBtnLink>
          </BaseButton>
          <BaseButton>
            <NavBtnLink to="/">
              <GitHubIcon
                sx={{
                  fontSize: "30px",
                }}
              />
            </NavBtnLink>
          </BaseButton>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
