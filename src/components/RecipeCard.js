import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const RecipeCard = ({ recipe }) => {

  const tagOne = recipe.tags[0]?.display_name
    ? recipe.tags[0]?.display_name.substring(0,15)
    : "Tasty";
  const tagTwo = recipe.tags[1]?.display_name
    ? recipe.tags[1]?.display_name.substring(0,15)
    : "Yummy";

  return (
    <Stack >
    <Link className="recipe-card" to={`/recipedetail/${recipe.id}`}>
      <Typography color="#34495e" p="10px" align="center" sx={{fontSize: "18px"}}>
        {recipe.name}
      </Typography>
      <img src={recipe.thumbnail_url} />
      <Stack
        mt="10px"
        direction="row"
        alignItems="center"
        columnGap="5px"
        justifyContent="flex-start"
      >
        <Typography color="#34495e" sx={{fontSize: "14px"}}>Tags:</Typography>
        <Button
          className="button-hover"
          sx={{
            color: "#fff",
            background: "#f39c12",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
            lineHeight: "90%",
          }}
        >
          {tagOne}
        </Button>
        <Button
          className="button-hover-red"
          sx={{
            color: "#fff",
            background: "#e74c3c",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
            lineHeight: "90%",
            padding: "5px 4px",
          }}
        >
          {tagTwo}
        </Button>
      </Stack>
      
    </Link></Stack>
  );
};

export default RecipeCard;
