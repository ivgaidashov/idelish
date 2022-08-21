import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme} sx={{
    
      
      '& .MuiSlider-thumb': {
        borderRadius: '1px',
      }}}>
      <Box width="400px" sx={{ width: { lg: "1084px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipedetail/:id" element={<RecipeDetail />} />
        </Routes>
        
      </Box><Footer />
    </ThemeProvider>
  );
};

export default App;
