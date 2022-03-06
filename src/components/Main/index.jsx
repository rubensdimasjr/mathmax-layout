import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
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

const Main = () => {
  return (
    <>
      <Box
        sx={{
          background: "#ff414d",
          "& @media screen and (max-width: 768px)": {
            padding: "100px 0",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: "100vh",
            flexGrow: 1,
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
                  <Img src="/src/images/image1.svg" alt="School" />
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
