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

const pages = ["Home", "Blog", "Contact", "About us"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
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
      
      // Scroll bo'lganda AppBar'ni qisqartirish
      if (currentScroll > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
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
          transition: "top 0.3s ease, backdrop-filter 0.3s ease, width 0.3s ease, left 0.3s ease, right 0.3s ease, border-radius 0.3s ease, background 0.3s ease",
          background: isScrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.95)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          zIndex: 9999,
          // Scroll bo'lganda qisqartirish
          width: isScrolled ? "calc(100% - 60px)" : "100%",
          left: isScrolled ? "30px" : "0",
          right: isScrolled ? "30px" : "0",
          borderRadius: isScrolled ? "16px" : "0",
          mt: isScrolled ? 2 : 0,
          // Opasity effektlari
          "&:hover": {
            background: "rgba(0,0,0,0.9)",
          }
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            px: isScrolled ? { xs: 2, sm: 3, md: 4 } : { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: isScrolled ? 60 : 70, // Scroll bo'lganda balandlikni qisqartirish
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "min-height 0.3s ease",
            }}
            onMouseEnter={() => setIsFocus(true)}
            onMouseLeave={() => setIsFocus(false)}
          >
            {/* Logo + Title */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "center",
              transition: "transform 0.3s ease",
              transform: isScrolled ? "scale(0.95)" : "scale(1)",
            }}>
              <img
                src="/images/logo.svg"
                alt="Logo"
                style={{ 
                  width: isScrolled ? 35 : 40,
                  height: isScrolled ? 35 : 40,
                  marginRight: isScrolled ? 8 : 10,
                  opacity: isScrolled ? 0.9 : 1,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: isScrolled ? "rgba(255,255,255,0.95)" : "white",
                  textDecoration: "none",
                  fontSize: isScrolled ? { xs: "0.9rem", sm: "1rem", md: "1.15rem" } : { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  transition: "all 0.3s ease",
                }}
              >
                Ta'limHub-Blog
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ 
              display: { xs: "none", md: "flex" }, 
              gap: isScrolled ? 1.5 : 2,
              transition: "gap 0.3s ease",
            }}>
              {pages.map((page) => {
                const href =
                  page === "Home"
                    ? "/"
                    : page === "Blog"
                    ? "/blog"
                    : `/${page.toLowerCase().replace(" ", "")}`;
                return (
                  <Link key={page} href={href} style={{ textDecoration: "none" }}>
                    <Button 
                      sx={{ 
                        color: isScrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.95)",
                        fontSize: isScrolled ? "0.9rem" : "1rem",
                        px: isScrolled ? 1.5 : 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "white",
                          backgroundColor: isScrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.15)",
                          borderRadius: "8px"
                        }
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                );
              })}
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ 
              display: { xs: "flex", md: "none" },
            }}>
              <IconButton
                size={isScrolled ? "medium" : "large"}
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ 
                  color: isScrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.95)",
                  transition: "all 0.3s ease",
                }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  mt: 1,
                  "& .MuiPaper-root": {
                    backgroundColor: "rgba(0,0,0,0.9)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "12px",
                    minWidth: "200px",
                  }
                }}
              >
                {pages.map((page) => {
                  const href =
                    page === "Home"
                      ? "/"
                      : page === "Blog"
                      ? "/blog"
                      : `/${page.toLowerCase().replace(" ", "")}`;
                  return (
                    <MenuItem 
                      key={page} 
                      onClick={handleCloseNavMenu}
                      sx={{
                        py: 2,
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                        }
                      }}
                    >
                      <Link
                        href={href}
                        style={{
                          textDecoration: "none",
                          color: "rgba(255,255,255,0.9)",
                          width: "100%",
                        }}
                      >
                        <Typography 
                          textAlign="center"
                          sx={{ fontSize: "1rem" }}
                        >
                          {page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Content offset so that content doesn't hide behind AppBar */}
      <Box sx={{ height: isScrolled ? 80 : 90, transition: "height 0.3s ease" }} />
    </>
  );
}