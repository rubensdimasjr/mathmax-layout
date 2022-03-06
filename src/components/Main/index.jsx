import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import laptopSchool from "../../images/image1.svg";
import {
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Btn,
} from "./MainElements";
import { useMediaQuery } from "@mui/material";

const Main = () => {
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
          <InfoWrapper>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <TopLine>Math Max</TopLine>
                  <Heading>Neque porro quisquam est qui dolorem</Heading>
                  <Subtitle>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </Subtitle>
                  <BtnWrap>
                    <Btn>Explorar</Btn>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={laptopSchool} alt="laptopSchool" />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </Container>
      </Box>
    </>
  );
};

export default Main;
