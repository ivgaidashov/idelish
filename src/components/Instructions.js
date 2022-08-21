import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

const Instructions = ({ data }) => {
  const maxSteps = data.length;
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box width="100%" mt="100px" display="flex" justifyContent="center">
      <Box sx={{ maxWidth: "1000px", flexGrow: 1 }}>
        <Paper
          square
          elevation={3}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "#e67e22",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <Typography fontSize="20px">INSTRUCTIONS</Typography>
        </Paper>
        <Box sx={{ width: "100%", p: 2 }}>
          <Typography fontSize="18px" color="#2c3e50" align="justify">
            {data[activeStep]?.description}
          </Typography>
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          elevation={0}
          nextButton={
            <Button
              size="small"
              onClick={nextStep}
              disabled={activeStep === maxSteps - 1}
              sx={{color:"#e74c3c", fontSize: "15px"}}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={previousStep}
              disabled={activeStep === 0}
              sx={{color:"#e74c3c", fontSize: "15px"}}
            >
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default Instructions;
