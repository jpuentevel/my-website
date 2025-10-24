import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        paddingX: 10,
        alignItems: "center",
        backgroundColor: "white",
        margin: 0,
      }}
    >
      <AppBar
        color="transparent"
        sx={{
          boxShadow: "none",
        }}
        position="sticky"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            sx={{
              ":hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <img src="./images/logo.png" alt="logo" height="50" />
          </IconButton>
          <Box>
            <Button
              variant="outlined"
              sx={{
                border: 0,
                color: "black",
                textTransform: "none",

                ":hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              about
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: 0,
                color: "black",
                textTransform: "none",

                ":hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              portfolio
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: 0,
                color: "black",
                textTransform: "none",

                ":hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Welcome to My Portfolio
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
