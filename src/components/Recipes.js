import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { fetchData, categoriesOptions } from "../utils/fetchData";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";

const Recipes = ({ setRecipes, recipes, category,  isFetching, setFetching}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };

  useEffect(() => {
    
    const fetchCategoryData = async () => {
      let categoryData = [];

      if ((category === "All")) {
        categoryData = await fetchData(
          "https://tasty.p.rapidapi.com/recipes/list?from=0&size=400&tags=under_30_minutes",
          categoriesOptions
        );
      } else {
        categoryData = await fetchData(
          `https://tasty.p.rapidapi.com/recipes/list?from=0&size=400&tags=${category}`,
          categoriesOptions
        );
      }
console.log(categoryData)
      setFetching('False');
      setRecipes(categoryData.results.filter(function (e) {
        return e.aspect_ratio == "1:1";
    }));
    };

    fetchCategoryData();
    
    
  }, [category]);


  return (
    <Box id="recipes" mt="10px" p="20px">
      <Typography variant="h4" mb="50px" align="center">
        Results
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="20px">
        {currentRecipes.length > 0 && isFetching =='False' ? currentRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        )): <Loader/>}
      </Stack>
      <Stack mt="50px" alignItems="center">
        {recipes.length > 9 && (
          <Pagination
            color="standard"
            defaultPage={1}
            count={Math.ceil(recipes.length / recipesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Recipes;
