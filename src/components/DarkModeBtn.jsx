import { Brightness4, DarkMode } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React from "react";

const DarkModeBtn = ({ setMode, mode }) => {
  return (
    <>
      <Checkbox
        onChange={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
        checked={mode === "dark" ? true : false}
        icon={<DarkMode sx={{ color: "secondary.main" }} />}
        checkedIcon={<Brightness4 sx={{ color: "secondary.main" }} />}
      />
    </>
  );
};

export default DarkModeBtn;
