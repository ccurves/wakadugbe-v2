import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";

import "./styles/App.css";
import OptionsTab from "./components/OptionsTab";
import LocationsCards from "./components/LocationsCards";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import { displayOnDesktop } from "./theme/commonStyles";
import FooterMenu from "./components/FooterMenu";
import MobileFooter from "./components/MobileFooter";
import FloatingButton from "./components/FloatingButton";
import AppThemeProvider from "./theme/AppThemeProvider";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <AppThemeProvider mode={mode}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header setMode={setMode} mode={mode} />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 6 }}>
            <LocationsCards />
            <Box
              sx={{
                display: { xs: "flex", md: "none", bottom: 0 },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box>
          <FloatingButton />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <FooterMenu setMode={setMode} mode={mode} />
        </Box>
        <Box
          sx={{
            ...displayOnDesktop,
            color: (theme) => `${theme.palette.text.primary} !important`,
          }}
          color="text.default"
        >
          <Footer />
        </Box>
      </Box>
    </AppThemeProvider>
  );
}

export default App;
