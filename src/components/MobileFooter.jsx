import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { BsGlobe } from "react-icons/bs";

import { justifyCenter } from "../theme/commonStyles";

const footerLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Sitemap", url: "#" },
];

const MobileFooter = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ccc",
        mt: 4,
        pt: 3,
        width: "100%",
      }}
    >
      <Paper>
        <Button
          sx={{
            color: (theme) => `${theme.palette.text.primary} `,
          }}
        >
          <Box sx={{ ...justifyCenter, mr: 1 }}>
            <BsGlobe size={18} />
          </Box>
          English ( US )
        </Button>

        <Button
          sx={{
            color: (theme) => `${theme.palette.text.primary} `,
          }}
        >
          {" "}
          $ CAD{" "}
        </Button>
      </Paper>

      <Stack sx={{ mt: 2 }}>
        <Paper>
          <Link
            href="#"
            sx={{
              color: (theme) => `${theme.palette.text.primary} `,
            }}
          >
            {" "}
            © 2022 Wakadugbe, Inc
          </Link>
        </Paper>
      </Stack>
      <Stack sx={{ mt: 2 }}>
        {footerLinks.map((link) => {
          return (
            <Paper key={link.id}>
              <Link
                href={link.url}
                sx={{
                  color: (theme) => `${theme.palette.text.primary} `,
                }}
              >
                {" "}
                {link.text}
              </Link>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MobileFooter;
