import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import DarkModeBtn from "./DarkModeBtn";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { AccountCircle, Favorite, Search } from "@mui/icons-material";

const footerMenu = [
  {
    id: 1,
    text: "Explore",
    icon: <Search size={18} className="icon" />,
    active: true,
  },
  { id: 2, text: "Wishlist", icon: <Favorite size={18} className="icon" /> },
  {
    id: 3,
    text: "Login",
    icon: <AccountCircle size={24} className="icon" />,
  },
];

const FooterMenu = ({ setMode, mode }) => {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexGrow: 1,
        borderTop: "1px solid rgb(0 0 0 / 8%)",
        zIndex: 20,
      }}
    >
      <Box>
        <Stack>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                "& .Mui-selected": {
                  "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
                    color: (theme) => theme.palette.secondary.main,
                  },
                },
                padding: "14px",
              }}
            >
              {footerMenu.map((item) => {
                return (
                  <BottomNavigationAction
                    label={item.text}
                    icon={item.icon}
                    key={item.id}
                  />
                );
              })}

              <DarkModeBtn setMode={setMode} mode={mode} />
            </BottomNavigation>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterMenu;
