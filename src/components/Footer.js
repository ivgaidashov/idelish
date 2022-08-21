import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../assets/images/mylogo.png';
 

const Footer = () => {
  return (
    <Box m="50px auto 0 auto" bgcolor="#FBAB7E" p="20px 0">
      <Stack direction="row"  justifyContent="center" alignItems="center" >
        <img src={Logo} alt="logo" style={{ width: 'auto', height: '60px' }}/>
        <Typography ml="10px">
        <a
              
              href={`http://www.ivgaide.club`}
              target="_blank"
              rel="noreferrer"
              className="contact-me"
            >Contact Me</a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
