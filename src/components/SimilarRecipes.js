import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader"

const SimilarRecipes = ({ similarRecipes }) => {
  return (
    <Box mt="60px" >
      <Typography align="center" mb="-20px" fontSize="25px" color="#2c3e50">
        Similar Recipes
      </Typography>
      <Box>
        {similarRecipes.length ? <HorizontalScrollBar  data={similarRecipes}/> : <Loader/>}
      </Box>
    </Box>
  );
};

export default SimilarRecipes;
