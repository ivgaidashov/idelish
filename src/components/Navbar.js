import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo1.png";

const Navbar = () => {
  return (
    <Stack width="100%" direction="row" justifyContent="flex-start" alignItems="center" marginTop="30px">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "50px", height: "50px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="50px" marginLeft="50px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "1.5rem"
          }}
        >
          Home
        </Link>
        <Link to="/#recipes"
          style={{
            fontSize: "1.5rem",
          }} onClick={() => {
            
            window.scrollTo({ top: 1100, behavior: 'smooth' });
          }}>
        
          Recipes
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
