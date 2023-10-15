/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
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
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link to="/">
              <img
                src={logo_AM}
                alt="Logo AM Forever Chic"
                style={{ width: "1.5rem", right: "0.5em" }}
              />
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={menu_logo}
                alt="logo menu hamburguesa"
                style={{ width: "1.5rem", right: "0.5em" }}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#899752" }}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo md */}

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
                  src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_blanco_uzmsux.png"
                  alt="Logo"
                  style={{ width: "5em", marginLeft: "0.5em" }}
                />
              </IconButton>
            </Link>

            {/* Menu md */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
                sx={{ color: "white", mx: 1 }}
              >
                Productos
              </Button>
              <Button
                component={Link}
                to="/category/interior"
                onClick={handleCloseNavMenu}
                sx={{ color: "white", mx: 1 }}
              >
                Plantas de Interior
              </Button>
              <Button
                component={Link}
                to="/category/exterior"
                onClick={handleCloseNavMenu}
                sx={{ color: "white", mx: 1 }}
              >
                Plantas de Exterior
              </Button>
              <Button
                component={Link}
                to="/nosotros"
                onClick={handleCloseNavMenu}
                sx={{ color: "white", mx: 1 }}
              >
                Nosotros
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
                  src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_blanco_uzmsux.png"
                  alt="Logo"
                  style={{ width: "5em" }}
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
                  <img
                    src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_blanco_uzmsux.png.png"
                    alt="Logo"
                    style={{ width: "5em" }}
                  />
                </Link>
              </IconButton>
            </Box>

            {/*  Carrito */}
            <Box
              sx={{
                display: "flex",
                marginRight: "0.5em",
              }}
            ></Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};
