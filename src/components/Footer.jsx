import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";

import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "../theme/commonStyles";

const footerLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Sitemap", url: "#" },
  { id: 4, text: "Attractions", url: "#" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            width: "100%",
          }}
        >
          <Stack>
            <Paper>
              <Link
                href="#"
                sx={{
                  color: (theme) => `${theme.palette.text.primary} `,
                }}
              >
                {" "}
                © 2022 Wakadugbe, Inc{" "}
              </Link>
            </Paper>
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

          <Stack>
            <Paper sx={justifyCenter}>
              <Button
                sx={{
                  color: (theme) => `${theme.palette.text.primary} `,
                }}
              >
                <Box
                  sx={{
                    ...justifyCenter,
                    mr: 1,
                  }}
                >
                  <BsGlobe size={18} />
                </Box>
                English (US)
              </Button>
              <Button
                sx={{
                  color: (theme) => `${theme.palette.text.primary} `,
                }}
              >
                {" "}
                $USD{" "}
              </Button>
              <Button
                sx={{
                  color: (theme) => `${theme.palette.text.primary} `,
                }}
              >
                Support & Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline size={18} />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
