import React from 'react';
import { Box, Stack, Typography, Button  } from "@mui/material";


const RecipeTags = ({data}) => {
  
  return (
    <Stack direction="row" flexWrap="wrap" ml="-10px" mt="10px">

        {data?.map((tag, index) => (
          <Button style={{
            
            color: "#f39c12",
        
        }}>
            {tag.display_name}
          </Button>
        ))}
    </Stack>
  )
}

export default RecipeTags