import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  BoxContent,
  IconWrap,
  BoxTitle,
  BoxDescription,
  BoxTitleWrap,
  BoxTitleH1,
  BoxDescription1,
} from "./BoxElements";

const BoxSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          /*           border: "1px solid #333", */
        }}
      >
        <Container maxWidth="lg">
          <BoxTitleWrap>
            <BoxTitleH1>Por que escolher MathMax</BoxTitleH1>
            <BoxDescription1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              finibus velit in enim vestibulum auctor. Donec at lacus sed ante.
            </BoxDescription1>
          </BoxTitleWrap>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing="2">
            <Grid item xs="12" md="3">
              <BoxContent>
                <IconWrap>
                  <PsychologyIcon sx={{ fontSize: 72, color: "#ff414d" }} />
                </IconWrap>
                <BoxTitle>O titulo vai estar aqui</BoxTitle>
                <BoxDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel.
                </BoxDescription>
              </BoxContent>
            </Grid>
            <Grid item xs="12" md="3">
              <BoxContent>
                <IconWrap>
                  <ColorLensIcon sx={{ fontSize: 72, color: "#ff414d" }} />
                </IconWrap>
                <BoxTitle>O titulo vai estar aqui</BoxTitle>
                <BoxDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel.
                </BoxDescription>
              </BoxContent>
            </Grid>
            <Grid item xs="12" md="3">
              <BoxContent>
                <IconWrap>
                  <PhonelinkIcon sx={{ fontSize: 72, color: "#ff414d" }} />
                </IconWrap>
                <BoxTitle>O titulo vai estar aqui</BoxTitle>
                <BoxDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel.
                </BoxDescription>
              </BoxContent>
            </Grid>
            <Grid item xs="12" md="3">
              <BoxContent>
                <IconWrap>
                  <AcUnitIcon sx={{ fontSize: 72, color: "#ff414d" }} />
                </IconWrap>
                <BoxTitle>O titulo vai estar aqui</BoxTitle>
                <BoxDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel.
                </BoxDescription>
              </BoxContent>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BoxSection;
