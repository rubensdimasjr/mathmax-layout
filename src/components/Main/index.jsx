import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Main = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#fff",
            height: "100vh",
            flexGrow: 1,
            marginTop: "20px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={50} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={50} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={50} />
            </Grid>

            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={50} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={50} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Grid>
            <Grid item xs={8}>
              <Skeleton variant="rectangular" height={50} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Main;
