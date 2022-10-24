import React from "react";
import Box from "@mui/material/Box";
import { flexCenter } from "../theme/commonStyles";
import logo from "../assets/img/logo-01.png";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <Box sx={{ display: { md: "none", lg: "flex" } }}>
        <img src={logo} alt="logo" srcset="" style={{ width: "120px" }} />
      </Box>
      <Box sx={{ display: { md: "flex", lg: "none" } }}>
        <img src={logo} alt="logo" srcset="" style={{ width: "120px" }} />
      </Box>
    </Box>
  );
};

export default Logo;
