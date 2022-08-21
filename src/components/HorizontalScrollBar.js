import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Category from "./Category";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import RecipeCard from "./RecipeCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifycontent="center"
      onClick={() => scrollPrev()}
      className="right-arrow"
    >
      <BsArrowLeft size="30" />
    </Stack>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifycontent="center"
      onClick={() => scrollNext()}
      className="left-arrow"
    >
      <BsArrowRight size="30" />
    </Stack>
  );
};

const HorizontalScrollBar = ({ data, category, setCategory, isCategory, setFetching}) => {
  return (
    
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            marginX="20px"
            sx={{maxHeight: '500px'}}
          >
            {isCategory ? (
              <Category
                item={item}
                category={category}
                setCategory={setCategory}
                setFetching={setFetching}
              />
            ) : (
              <RecipeCard recipe={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    
  );
};

export default HorizontalScrollBar;
