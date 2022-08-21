import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import RecipeTags from "./RecipeTags";
import FoodInfo from "./FoodInfo";
import MoreInfo from "./MoreInfo";
import Instructions from "./Instructions";

const Details = ({ recipeDetails }) => {
  const foodDetails = {
    fat: recipeDetails.nutrition?.fat,
    protein: recipeDetails.nutrition?.protein,
    fiber: recipeDetails.nutrition?.fiber,
    calories: recipeDetails.nutrition?.calories,
  };

  const foodMinutes = {
    cook_time: recipeDetails.cook_time_minutes,
    prep_time: recipeDetails.prep_time_minutes,
    num_servings: recipeDetails.num_servings,
  };

  const instructionsLength = recipeDetails.instructions?.length;
  let instructionsArray = [];

  for (let i = 0; i < instructionsLength; i++) {
    const label = recipeDetails.instructions[i]?.position;
    const description = recipeDetails.instructions[i]?.display_text;

    const cell = {
      label,
      description,
    };

    instructionsArray.push(cell);
  }


  return (
    <Box>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="500px"
    >
      <Stack justifyContent="center" alignItems="center" width="100%">
        <Box className="detail-card">
          <img src={recipeDetails.thumbnail_url} />
        </Box>
      </Stack>
      <Stack
        justifyContent="space-evenly"
        sx={{ borderRadius: 2 }}
        width="100%"
        height="100%"
      >
        <Stack>
          <Typography
            fontSize="40px"
            fontWeight="700"
            sx={{ color: "#2c3e50" }}
          >
            {recipeDetails.name}
          </Typography>
          <Typography fontSize="17px" sx={{ color: "#2c3e50" }} mt="10px">
            {recipeDetails.description}
          </Typography>
          <RecipeTags data={recipeDetails.tags?.slice(0, 10)} />
        </Stack>
        <Stack>
          <Stack
            direction="row"
            mt="10px"
            gap="15px"
            sx={{ borderTop: "1px solid" }}
          >
            <FoodInfo data={foodDetails} />
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            gap="10px"
            mt="10px"
            ml="-10px"
          >
            <MoreInfo data={foodMinutes} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>

    <Instructions data={instructionsArray}/>

    </Box>
  );
};

export default Details;
