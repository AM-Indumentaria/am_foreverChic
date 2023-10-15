/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
} from "@mui/material";
import logo_AM from "../../../assets/logo_AM.webp";
import menu_logo from "../../../assets/menu_logo.svg";
import { Link } from "react-router-dom";

export const NavbarPresentacional = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#aaa" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {/* Menu md */}
          <Link to="/">
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{
                padding: "0.5em",
                display: { md: "flex", xs: "none" },
                mr: 1,
              }}
            >
              <img
                src={logo_AM}
                alt="Logo"
                style={{ width: "3em", marginLeft: "0.5em" }}
              />
            </IconButton>
          </Link>

          <Box
            sx={{
              display: { xs: "none", md: "flex", margin: "0 3rem 0 auto" },
            }}
          >
            <Button
              component={Link}
              to="/outfits"
              onClick={handleCloseNavMenu}
              sx={{ color: "black", mx: 1 }}
            >
              Outfits
            </Button>
            <Button
              component={Link}
              to="/talles"
              onClick={handleCloseNavMenu}
              sx={{ color: "black", mx: 1 }}
            >
              Talles
            </Button>
            <Button
              component={Link}
              to="/sobreNosotros"
              onClick={handleCloseNavMenu}
              sx={{ color: "black", mx: 1 }}
            >
              Sobre nosotros
            </Button>
            <Button
              component={Link}
              to="/faqs"
              onClick={handleCloseNavMenu}
              sx={{ color: "black", mx: 1 }}
            >
              Preguntas frecuentes
            </Button>
            <Button
              component={Link}
              to="/footer"
              onClick={handleCloseNavMenu}
              sx={{ color: "black", mx: 1 }}
            >
              Contactanos
            </Button>
          </Box>

          {/* Menu xs */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          ></IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <IconButton
              component={Link}
              to="/"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleCloseNavMenu}
            >
              <img
                src={menu_logo}
                alt="Logo"
                style={{ width: "3em", marginLeft: "0.5em" }}
              />
            </IconButton>
          </Menu>

          {/* LOGO xs */}
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              paddingLeft: "1em",
            }}
          >
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Link to="/">
                <IconButton
                  edge="start"
                  aria-label="menu"
                  sx={{
                    padding: "0.5em",
                    display: { md: "none", xs: "flex" },
                    mr: 1,
                  }}
                >
                  <img src={logo_AM} alt="Logo" style={{ width: "2em" }} />
                </IconButton>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
