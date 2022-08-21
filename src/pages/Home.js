import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner.js";
import SearchRecipes from "../components/SearchRecipes.js";
import Recipes from "../components/Recipes.js";
import Loader from "../components/Loader.js";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [recipes, setRecipes] = useState([]);
  const [isFetching, setFetching] = useState('False');


  console.log(recipes)

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes
        setRecipes={setRecipes}
        category={category}
        setCategory={setCategory}
        setFetching={setFetching}
      />
       <Recipes
        setRecipes={setRecipes}
        recipes={recipes}
        category={category}
        isFetching={isFetching}
        setFetching={setFetching}
      /> 
    </Box>
  );
};

export default Home;
