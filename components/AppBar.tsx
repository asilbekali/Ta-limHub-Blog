"use client";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// Sizning Contact button component
import MenuPopupState from "@/components/dashbutton";

const pages = ["Home", "Blog", "Contact", "About us"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [show, setShow] = React.useState(true);
  const [lastScroll, setLastScroll] = React.useState(0);
  const [isFocus, setIsFocus] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!isFocus) {
        if (currentScroll > lastScroll && currentScroll > 50) {
          setShow(false);
        } else {
          setShow(true);
        }
      }

      setIsScrolled(currentScroll > 100);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, isFocus]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: show ? 0 : "-100px",
          transition:
            "top 0.3s ease, backdrop-filter 0.3s ease, width 0.3s ease, left 0.3s ease, right 0.3s ease, border-radius 0.3s ease, background 0.3s ease",
          background: isScrolled ? "rgba(28,28,28,0.82)" : "rgba(20,20,20,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          zIndex: 9999,
          width: isScrolled ? "calc(100% - 60px)" : "100%",
          left: isScrolled ? "30px" : "0",
          right: isScrolled ? "30px" : "0",
          borderRadius: isScrolled ? "16px" : "0",
          mt: isScrolled ? 2 : 0,
          "&:hover": {
            background: "rgba(40,40,40,0.9)",
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: isScrolled ? 60 : 70,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "min-height 0.3s ease",
            }}
            onMouseEnter={() => setIsFocus(true)}
            onMouseLeave={() => setIsFocus(false)}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                transform: isScrolled ? "scale(0.95)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="/images/logo.svg"
                alt="Logo"
                style={{
                  width: isScrolled ? 35 : 40,
                  height: isScrolled ? 35 : 40,
                  marginRight: 10,
                }}
              />
              <Typography
                variant="h6"
                fontFamily={"Roboto Mono, monospace"}
                sx={{
                  fontWeight: 800,
                  letterSpacing: ".2rem",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Ta'limHub-Blog
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {pages.map((page) =>
                page === "Contact" ? (
                  <MenuPopupState key={page} /> // Contact button
                ) : (
                  <Link
                    key={page}
                    href={
                      page === "Home"
                        ? "/"
                        : page === "Blog"
                        ? "/blog"
                        : `/${page.toLowerCase().replace(" ", "")}`
                    }
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: isScrolled ? "0.9rem" : "1rem",
                        px: 2,
                        "&:hover": {
                          color: "white",
                          backgroundColor: "rgba(255,255,255,0.12)",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                )
              )}
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: "rgba(255,255,255,0.9)" }} />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{
                  mt: 1,
                  "& .MuiPaper-root": {
                    backgroundColor: "rgba(25,25,25,0.9)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "12px",
                    minWidth: 200,
                  },
                }}
              >
                {pages.map((page) =>
                  page === "Contact" ? (
                    <MenuItem key={page}>
                      <MenuPopupState /> {/* Mobile menu Contact */}
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      <Link
                        href={
                          page === "Home"
                            ? "/"
                            : page === "Blog"
                            ? "/blog"
                            : `/${page.toLowerCase().replace(" ", "")}`
                        }
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          textDecoration: "none",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        {page}
                      </Link>
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Offset */}
      <Box sx={{ height: isScrolled ? 80 : 90 }} />
    </>
  );
}
