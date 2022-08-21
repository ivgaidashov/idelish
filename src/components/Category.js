import React from "react";
import { Stack, Typography } from "@mui/material";
import { MdFoodBank } from "react-icons/md";
import {capitalizeFirstLetter, removeUndescores} from "../utils/usefulFunctions"

const Category = ({ item, category, setCategory, setFetching }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: item === category ? "3px solid #e67e22" : "",
        width: "120px",
        height: "120px",
        padding: "10px",
        cursor: "pointer",
        gap: "20px",
        background: "white"
      }}
      className="category-card"
      onClick={() => {
        setFetching('True');
        setCategory(item);
        window.scrollTo({ top: 1100, behavior: 'smooth' });
      }}
    >
      <MdFoodBank color="#f39c12" size="40px" />
      <Typography fontSize={16} color="#2c3e50" fontWeight={400}>
        {capitalizeFirstLetter(removeUndescores(item))}
      </Typography>
    </Stack>
  );
};

export default Category;
