import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { BsPlayCircle } from "react-icons/bs";
import Loader from "./Loader";

const RecipeVideos = ({ recipeVideos, recipeTitle }) => {
  console.log(recipeVideos);
  return (
    
    <Box m="auto" mt="80px" width="950px">
      <Typography align="center" mb="20px" fontSize="25px" color="#2c3e50">
        Watch {recipeTitle} Videos
      </Typography>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-around"
        gap="10px"
        mt="30px"
      >
        {recipeVideos.length > 0 ? recipeVideos.map((video, index) => (
          
          <Stack w="30%" className="recipe-video" sx={{ boxShadow: 5 }}>
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={video.video.thumbnails[0].url} />
            </a>
            <a
              key={index + 1}
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <BsPlayCircle size={50} color="white" className="play-video" />
            </a>
          </Stack>
        )) : <Loader/>}
      </Stack>
    </Box>
  );
};

export default RecipeVideos;
