// HeaderBox.tsx
/* eslint-disable no-restricted-globals */
import Box from "@mui/material/Box";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Item from "./components/styled/StyledItem";
import { menuItems } from "./constants/menuItems";

export default function HeaderBox() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",

        mt: -1, // moves the Box up
        alignItems: "center",

        justifyContent: "center",
        py: 2,
        paddingTop: 0.6,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "94%",

            mt: -1, // moves the Box up
            md: "65%",
          },
        }}
      >
        <Stack spacing={2}>
          <Item>
            <Typography
              variant="h6"
              fontWeight={900}
              color="#006600"
              gutterBottom={false} // remove the default bottom margin
              sx={{ mt: -1.5 }} // move it up
            >
              Nairaland Clone
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",

                alignItems: "center",
                columnGap: 0.5,
                rowGap: 0.5,
              }}
            >
              <Typography component="span" fontWeight={300} color="#333333">
                Welcome, john1101(m):
              </Typography>

              {menuItems.map(({ label, to }, index) => (
                <Box
                  key={to}
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.95rem",
                  }}
                >
                  {index !== 0 && (
                    <Typography
                      component="span"
                      sx={{ mx: 0.3, fontWeight: 300, color: "#333333" }}
                    >
                      /
                    </Typography>
                  )}
                  <Link
                    component={external ? "a" : RouterLink}
                    {...(external
                      ? {
                          href: to,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { to })}
                    underline="hover"
                    sx={{ fontWeight: 700, color: "#333333" }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 1,
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography variant="body2">
                <Box component="span" fontWeight={700}>
                  Stats
                </Box>
                : 3,248,940 members, 8,139,436 topics.{" "}
                <Box component="span" fontWeight={700}>
                  Date
                </Box>
                : Sunday, 20 April 2025 at 12:50 AM /
              </Typography>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = (
                    e.currentTarget.search as HTMLInputElement
                  ).value.trim();
                  if (q) navigate(`/search?query=${encodeURIComponent(q)}`);
                }}
                style={{
                  display: "flex",
                  gap: 8,
                  width: isMobile ? "100%" : 300,
                }}
              >
                <input
                  name="search"
                  placeholder="Search..."
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    border: "none",
                    backgroundColor: "#006600",
                    color: "#fff",
                    borderRadius: 8,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Search
                </button>
              </form>

              <Button
                variant="outlined"
                size="small"
                color="error"
                onClick={() => alert("Logged out")}
                sx={{ whiteSpace: "nowrap" }}
              >
                Logout
              </Button>
            </Box>
          </Item>
        </Stack>
      </Box>
    </Box>
  );
}
