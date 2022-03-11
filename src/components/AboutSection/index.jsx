import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import peopleSvg from "../../images/image2.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import {
  AboutRow,
  AboutTitleWrapper,
  AboutTitle,
  AboutDescription,
  ImgAboutWrap,
  AboutImg,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#fff",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            justifyContent: "center",
            zIndex: 1,
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "120px 24px",
          }}
        >
          <Grid container rowSpacing={1} columnSpacing={{ sm: 1, md: 2 }}>
            <Grid item md={6} sm={12}>
              <ImgAboutWrap>
                <AboutImg src={peopleSvg} alt="People" />
              </ImgAboutWrap>
            </Grid>

            <Grid item md={6} sm={12}>
              <AboutRow>
                <AboutTitleWrapper>
                  <AboutTitle>Sobre nós</AboutTitle>
                  <AboutDescription>
                    A animi quae aliquid culpa accusantium dolorum provident
                    dolor repudiandae enim maxime, quo fuga eveniet iure
                    consequatur suscipit eos. Consectetur exercitationem
                    voluptatem minima, ipsam quis laudantium quod vero
                    inventore. Ut dolores ratione velit exercitationem
                    repudiandae dicta placeat delectus ab, soluta consequatur
                    libero
                  </AboutDescription>
                </AboutTitleWrapper>
                <Grid container rowSpacing={1} columnSpacing={{ sm: 1 }}>
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<CheckCircleOutlineIcon />}
                      sx={{ width: "100%", color: "#ff414d" }}
                    >
                      Qual quer escrita
                    </Button>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<CheckCircleOutlineIcon />}
                      sx={{ width: "100%", color: "#ff414d" }}
                    >
                      Qual quer escrita
                    </Button>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ width: "100%", color: "#ff414d" }}
                      startIcon={<CheckCircleOutlineIcon />}
                    >
                      Qual quer escrita
                    </Button>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ width: "100%", color: "#ff414d" }}
                      startIcon={<CheckCircleOutlineIcon />}
                    >
                      Qual quer escrita
                    </Button>
                  </Grid>
                </Grid>
              </AboutRow>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutSection;
