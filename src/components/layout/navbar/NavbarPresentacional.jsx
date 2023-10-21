/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import close_icon from "../../../assets/close_icon.svg";
import credit_card from "../../../assets/credit_card.svg";
import logo_AM from "../../../assets/logo_AM.webp";
import menu_logo from "../../../assets/menu_logo.svg";

export const NavbarPresentacional = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { md: "2.3em", sm: "1.7rem", xs: "1.3rem" },
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="P"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { md: "1rem", sm: "0.8rem", xs: "0.6rem" },
          }}
        >
          ENVÍOS A TODO EL PAÍS
        </Typography>
        <img src={credit_card} alt="logo credit card" style={{}} />
      </Box>

      <AppBar position="sticky" style={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ display: "flex" }}>
            {/* Logo AM */}
            <a href="#home">
              {/* celular */}
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{
                  padding: "0.5em",
                  justifyContent: "flex-start",
                  display: { xs: "flex", sm: "none", md: "none" },
                }}
              >
                <img
                  src={logo_AM}
                  alt="Logo"
                  style={{
                    width: "2.5rem",
                    marginLeft: "0.5em",
                  }}
                />
              </IconButton>
              {/* tablet */}
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{
                  padding: "0.5em",
                  justifyContent: "flex-start",
                  display: { xs: "none", sm: "flex", md: "none" },
                }}
              >
                <img
                  src={logo_AM}
                  alt="Logo"
                  style={{
                    width: "3rem",
                    marginLeft: "0.5em",
                  }}
                />
              </IconButton>
              {/* desktop */}
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{
                  padding: "0.5em",
                  justifyContent: "flex-start",
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              >
                <img
                  src={logo_AM}
                  alt="Logo"
                  style={{
                    width: "4rem",
                    marginLeft: "0.5em",
                  }}
                />
              </IconButton>
            </a>

            {/* MENU XS */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "none", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <img
                  src={menu_logo}
                  alt="Menu"
                  style={{
                    width: "2rem",
                    margin: "auto",
                    justifyContent: "flex-end",
                  }}
                />
              </IconButton>
              <Drawer
                anchor="left"
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  "& .MuiPaper-root.MuiDrawer-paper": {
                    width: "100%",
                    height: "70%",
                  },
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  onClick={handleCloseNavMenu}
                  color="inherit"
                  aria-label="close drawer"
                >
                  <img
                    src={close_icon}
                    alt="close icon"
                    style={{
                      width: "2rem",
                      margin: "1rem",
                      justifyContent: "flex-end",
                    }}
                  />
                </IconButton>
                <List
                  sx={{
                    margin: "5rem 3rem 4rem 1rem",
                  }}
                >
                  <a href="#outfits" onClick={handleCloseNavMenu}>
                    <ListItem>
                      <ListItemText
                        primary="Outfits"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            fontStyle: "italic",
                            marginBottom: "0.5rem",
                          },
                        }}
                      />
                    </ListItem>
                  </a>
                  <a href="#talles" onClick={handleCloseNavMenu}>
                    <ListItem>
                      <ListItemText
                        primary="Talles"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            fontStyle: "italic",
                            marginBottom: "0.5rem",
                          },
                        }}
                      />
                    </ListItem>
                  </a>
                  <a href="#sobreNosotros" onClick={handleCloseNavMenu}>
                    <ListItem>
                      <ListItemText
                        primary="Sobre nosotros"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            fontStyle: "italic",
                            marginBottom: "0.5rem",
                          },
                        }}
                      />
                    </ListItem>
                  </a>
                  <a href="#faqs" onClick={handleCloseNavMenu}>
                    <ListItem>
                      <ListItemText
                        primary="Preguntas frecuentes"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            fontStyle: "italic",
                            marginBottom: "0.5rem",
                          },
                        }}
                      />
                    </ListItem>
                  </a>
                  <a href="#footer" onClick={handleCloseNavMenu}>
                    <ListItem>
                      <ListItemText
                        primary="Contactanos"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            fontStyle: "italic",
                          },
                        }}
                      />
                    </ListItem>
                  </a>
                </List>
              </Drawer>
            </Box>

            {/* MENU MD */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex", margin: "0 0 0 auto" },
              }}
            >
              <a href="#outfits" onClick={handleCloseNavMenu}>
                <Button
                  sx={{
                    color: "black",
                    mx: { sm: "auto", md: "auto", lg: 1 },
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Outfits
                </Button>
              </a>
              <a href="#talles" onClick={handleCloseNavMenu}>
                <Button
                  sx={{
                    color: "black",
                    mx: { sm: "auto", md: "auto", lg: 1 },
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Talles
                </Button>
              </a>
              <a href="#sobreNosotros" onClick={handleCloseNavMenu}>
                <Button
                  sx={{
                    color: "black",
                    mx: { sm: "auto", md: "auto", lg: 1 },
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Sobre nosotros
                </Button>
              </a>
              <a href="#faqs" onClick={handleCloseNavMenu}>
                <Button
                  sx={{
                    color: "black",
                    mx: { sm: "auto", md: "auto", lg: 1 },
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Preguntas frecuentes
                </Button>
              </a>
              <a href="#footer" onClick={handleCloseNavMenu}>
                <Button
                  sx={{
                    color: "black",
                    mx: { sm: "auto", md: "auto", lg: 1 },
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Contactanos
                </Button>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
