"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Blog", "Contact", "About us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [show, setShow] = React.useState(true);
  const [lastScroll, setLastScroll] = React.useState(0);
  const [isFocus, setIsFocus] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!isFocus) {
        if (currentScroll > lastScroll && currentScroll > 50) {
          setShow(false); // scroll past 50px → hide
        } else {
          setShow(true); // scroll up → show
        }
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, isFocus]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: show ? 0 : "-100px",
          transition: "top 0.3s ease, backdrop-filter 0.3s ease",
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          zIndex: 9999,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 70,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onMouseEnter={() => setIsFocus(true)}
            onMouseLeave={() => setIsFocus(false)}
          >
            {/* Logo + Title */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/logo.svg"
                alt="Logo"
                style={{ width: 40, height: 40, marginRight: 10 }}
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
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Ta'limHub-Blog
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {pages.map((page) => (
                <Button key={page} sx={{ color: "white" }}>
                  {page}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: 70 }} /> {/* content offset */}
    </>
  );
}
