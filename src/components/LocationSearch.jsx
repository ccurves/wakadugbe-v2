import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { SearchRounded } from "@mui/icons-material";

const choices = [
  { id: 1, text: "Anywhere" },
  { id: 2, text: "Any week" },
  { id: 3, text: "Mood", withIcon: true, active: true },
];

const LocationSearch = ({ ...theme }) => {
  return (
    <Paper
      sx={{
        borderRadius: "40px",
        ml: 15,
        backgroundColor: "background.default",
        border: "1px solid #ddd",
        boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);",
        transition: "box-shadow 0.2s ease",
        height: "55px",
      }}
    >
      {" "}
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "30px", marginTop: "7px !important" }}
          />
        }
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography
                sx={{
                  color: choice.active
                    ? "#8a8a8a"
                    : (theme) => theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                    // borderRadius: "50%",
                    // background: `${pink[500]}`,
                  }}
                >
                  {/* <IoSearchCircleSharp sx={{ color: "#eee" }} size={32} /> */}
                  <SearchRounded color="secondary.main" />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
