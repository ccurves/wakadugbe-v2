import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const MobileSearch = ({ mode }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: "0.5px solid rgba(0,0,0,0.08)",
        boxShadow:
          mode === "light"
            ? "0 3px 10px rgb(0 0 0 / 10%)"
            : "0 3px 10px rgb(0 0 0 / 25%)",
        transition: "translate3d(0,0,0)",
        borderRadius: "40px",
      }}
    >
      <IconButton sx={{ p: "10px" }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
      <IconButton type="button" sx={{ p: "10px" }}>
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
