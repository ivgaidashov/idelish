import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Banner from "../assets/images/landing1.jpg";

const HeroBanner = () => {
  return (
    <Box sx={{position: 'relative'}}>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        marginTop="60px"
      >
        <Stack alignItems="center" width="250px" marginRight="20px" >
          <Typography
           fontWeight="600"
            color="#FF2625"

            sx={{
              zIndex: "-1",
              position: "absolute",
              top: "0",
              left: "0",
              width: "2000px",
              opacity: "0.05",
              display: { lg: "block", xs: "none" },
              fontSize: "155px"
            }}
          >
            1 tbsp of sugar
          </Typography>

          <Typography align="left" fontSize="18px" fontWeight="600" sx={{color: "#e67e22"}}>
            Explore International Cuisine
          </Typography>

          <a
            href="#recipes"
            style={{
              margin: "15px 0 20px 0",
              textDecoration: "none",
              width: "100%",
              textAlign: "center",
              background: "#f39c12",
              padding: "14px",
              textTransform: "none",
              color: "white",
              fontSize: "20px",
              borderRadius: "4px",
            }}
          >
            Discover the Most Delicious Recipes
          </a>

          <Typography
            align="right"
            fontSize="13px"
            style={{
              color: "#7f8c8d",
            }}
          >
            Made by IvGaide, Inspired by JS-Mastery, Powered by the Tasty Api
          </Typography>
          <Typography
            fontWeight={600}
            color="#FF2625"
            sx={{
              zIndex: "-1",
              position: "absolute",
              top: "70%",
              left: "0",
              opacity: "0.05",
              display: { lg: "block", xs: "none" },
              fontSize: "155px",
            }}
          >
            2 oz of love
          </Typography>
        </Stack>

        <Box>
          <img
            src={Banner}
            alt="Banner"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "700px",
              height: "auto",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
