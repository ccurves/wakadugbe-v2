import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { theme } from "./theme";

const AppThemeProvider = (prop) => {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontSize: 15,
      },
    },
    palette: {
      mode: prop.mode,
      primary: {
        main: "#020b0c",
        black: "#000",
        white: "#fff",
      },
      secondary: {
        main: "#6b888b",
        light: "#b5c3c5",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          sx: {
            px: 1,
          },
          variant: "subtitle2",
          textTransform: "capitalize",
        },
      },
      MuiStack: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          spacing: 2,
          direction: "row",
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiLink: {
        defaultProps: {
          sx: {
            color: (theme) => theme.palette.primary.main,
          },
          underline: "none",
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
          p: 0,
          disableRipple: true,
        },
        variant: "text",
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiBottomNavigationAction: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
  return <ThemeProvider theme={theme}> {prop.children} </ThemeProvider>;
};

export default AppThemeProvider;
