import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import {fetchData, categoriesOptions} from "../utils/fetchData";
import {data} from "../utils/categories";
import HorizontalScrollBar from "./HorizontalScrollBar"

const SearchRecipes = ( {setRecipes, category, setCategory, setFetching}) => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = /*data*/await fetchData('https://tasty.p.rapidapi.com/tags/list', categoriesOptions);
      setCategories(['All', ...(categoriesData.results.map((item) => (item.name)).splice(0, 10))]);
      /*setCategories(['All', ...(data.map((item) => (item.name)))])*/
    }

    fetchCategories();
    
  }, [])

  const handleSearch = async () => {
    if (search)
    {
      setRecipes([]);
      const recipesData = await fetchData(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=200&q=${search}`, categoriesOptions);

      setSearch('');
      setRecipes(recipesData.results.filter(function (e) {
        return e.aspect_ratio == "1:1";
    }));
    window.scrollTo({top:1100, behavior: "smooth"});
    }
  }

  return (
    <Stack align="center" marginTop="50px" p="30px">
      <Typography color="#7f8c8d" fontSize="25px" fontWeight="600">
        Name of food or, ingredients to search by
      </Typography>

      <Stack direction="row" width="100%" mt="20px" gap="10px">
        <Box width="80%">
          <TextField
            sx={{ width: "100%", bgcolor: "#FFF" }}
            value={search}
            placeholder="I love React.JS"
            type="text"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </Box>
        <Box width="20%">
          <Button
            sx={{
              bgcolor: "#f39c12",
              color: "#fff",
              textTransform: "none",
              width: "100%",
              height: "56px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Stack>
      <Stack mt="50px">
        <HorizontalScrollBar data={categories} category={category} setCategory={setCategory} isCategory setFetching={setFetching}/>
      </Stack>
    </Stack>
  );
};

export default SearchRecipes;
