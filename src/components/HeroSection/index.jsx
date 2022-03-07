import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import laptopSchool from "../../images/image1.svg";
import {
  HeroWrapper,
  HeroRow,
  HeroColumn1,
  HeroColumn2,
  HeroImgWrap,
  HeroImg,
  HeroTextWrapper,
  HeroTopLine,
  HeroHeading,
  HeroSubtitle,
  HeroBtnWrap,
  HeroBtn,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          background: "#ff414d",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: "100vh",
            ["@media screen and (max-width: 768px)"]: {
              height: " ",
            },
          }}
        >
          <HeroWrapper>
            <HeroRow>
              <HeroColumn1>
                <HeroTextWrapper>
                  <HeroTopLine>Math Max</HeroTopLine>
                  <HeroHeading>
                    Neque porro quisquam est qui dolorem
                  </HeroHeading>
                  <HeroSubtitle>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </HeroSubtitle>
                  <HeroBtnWrap>
                    <HeroBtn>Explorar</HeroBtn>
                  </HeroBtnWrap>
                </HeroTextWrapper>
              </HeroColumn1>
              <HeroColumn2>
                <HeroImgWrap>
                  <HeroImg src={laptopSchool} alt="laptopSchool" />
                </HeroImgWrap>
              </HeroColumn2>
            </HeroRow>
          </HeroWrapper>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
