import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import { HiOutlineClock } from "react-icons/hi";
import { IoMdTimer } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";

const MoreInfo = ({ data }) => {
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center">
        {data.cook_time && (
          <IconButton>
            <HiOutlineClock color="#e74c3c" size={30} />
          </IconButton>
        )}
        <Typography fontSize="18px" color="#2c3e50">
          {data.cook_time && data.cook_time+" min to cook"}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        {data.prep_time && (
          <IconButton>
            <IoMdTimer color="#e74c3c" size={30} />
          </IconButton>
        )}
        <Typography fontSize="18px" color="#2c3e50">
          {data.prep_time && data.prep_time +" min to prepare"}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        {data.num_servings && (
          <IconButton>
            <GiKnifeFork color="#e74c3c" size={30} />
          </IconButton>
        )}
        <Typography fontSize="18px" color="#2c3e50">
          {data.num_servings && data.num_servings + " servings"}
        </Typography>
      </Stack>
    </React.Fragment>
  );
};

export default MoreInfo;
