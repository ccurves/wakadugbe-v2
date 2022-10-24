import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../theme/commonStyles";
import DarkModeBtn from "./DarkModeBtn";

const ProfileSettings = ({ setMode, mode }) => {
  return (
    <Box sx={{ ...flexCenter }}>
      <Link
        href="#"
        sx={{
          color: (theme) => `${theme.palette.text.primary} `,
        }}
      >
        {" "}
        Add an attraction
      </Link>

      <Stack spacing={0}>
        <Button
          sx={{
            color: (theme) => `${theme.palette.text.primary} `,
          }}
        >
          <BsGlobe size={18} />
        </Button>
        <Box>
          <DarkModeBtn setMode={setMode} mode={mode} />
        </Box>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
            color: (theme) => `${theme.palette.text.primary} `,
          }}
        >
          <Stack>
            <AiOutlineMenu size={21} />
            <FaRegUserCircle size={21} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
