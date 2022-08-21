import React from "react";
import { Box, Stack, Typography, IconButton, Grid } from "@mui/material";
import {capitalizeFirstLetter} from "../utils/usefulFunctions";

const FoodInfo = ({ data }) => {
    return (<React.Fragment>
    {
        Object.entries(data).map(([ key, value ], i) => 
        <Stack direction="row" key={i} pt="10px">
          <Typography fontSize="18px"color="#2c3e50">{capitalizeFirstLetter(key)}: </Typography>
          <Typography fontSize="18px" ml="5px">{value}</Typography>
        </Stack>
      )
    }
  </React.Fragment>
)}

export default FoodInfo;
