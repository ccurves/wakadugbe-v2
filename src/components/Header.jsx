import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../theme/commonStyles";
import LocationSearch from "./LocationSearch";
import ProfileSettings from "./ProfileSettings";
import MobileSearch from "./MobileSearch";

const Header = ({ setMode, mode }) => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: { xs: "", md: "1px solid #eee" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 80,
            px: 3,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings setMode={setMode} mode={mode} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Box sx={{ width: "100vw", padding: "10px" }}>
              <MobileSearch mode={mode} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
