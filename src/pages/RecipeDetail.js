import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from "@mui/material";
import Details from "../components/Details";
import RecipeVideos from "../components/RecipeVideos";
import SimilarRecipes from "../components/SimilarRecipes";
import {data} from "../utils/recipe";
import Loader from '../components/Loader';

import { fetchData, categoriesOptions, youtubeOptions } from "../utils/fetchData";

const RecipeDetail = () => {

  const [recipeDetails, setRecipeDetails] = useState({});
  const [recipeVideos, setRecipeVideos] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);


  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

      const fetchRecipeData = async () => {
        const recipeUrl = 'https://tasty.p.rapidapi.com';
        const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';
        setSimilarRecipes([])
        setRecipeVideos([])

        const recipeUrlData = await fetchData(`${recipeUrl}/recipes/get-more-info?id=${id}`, categoriesOptions);
        setRecipeDetails(recipeUrlData);
        
        const recipeVideoData = await fetchData(`${youtubeUrl}/search?query=${recipeUrlData.name.replace(" ", "%20")}&hl=en&gl=US&type=v`, youtubeOptions);
        setRecipeVideos(recipeVideoData?.contents.filter(function (e) {
          return e.video.thumbnails[0].height == 202;
      }).slice(0, 3));

        const recipeSimilarData = await fetchData(`${recipeUrl}/recipes/list-similarities?recipe_id=${id}`, categoriesOptions);
        setSimilarRecipes(recipeSimilarData?.results.filter(function (e) {
          return e.aspect_ratio == "1:1"}).slice(0, 10));
      }
      fetchRecipeData();
   }, [id]
  )


  return (
    <Box>
      
      <Details recipeDetails={recipeDetails}/>
      <RecipeVideos recipeVideos={recipeVideos} recipeTitle={recipeDetails.name}/>
      <SimilarRecipes similarRecipes={similarRecipes}/>
    </Box>
  )
}

export default RecipeDetail