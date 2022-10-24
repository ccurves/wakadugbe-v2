import { MapRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MobileFloatingBtn = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 100,
        left: { xs: "calc(40% - 25px)", md: "calc(50% - 25px)" },
      }}
    >
      <Fab color="primary" variant="extended" sx={{ bgcolour: "primary.main" }}>
        Show map
        <MapRounded sx={{ ml: 0.5 }} size={18} />
      </Fab>
    </Box>
  );
};

export default MobileFloatingBtn;
