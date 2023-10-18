import { Box, IconButton, Typography } from "@mui/material";
import logo_AM_transparente from "../../../assets/logo_AM_transparente.webp";

export const QuienesSomos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(208, 173, 153, 0.10)",
      }}
    >
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
          src={logo_AM_transparente}
          alt="Logo"
          style={{
            width: "3rem",
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
          src={logo_AM_transparente}
          alt="Logo"
          style={{
            width: "20rem",
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
          src={logo_AM_transparente}
          alt="Logo"
          style={{
            width: "25rem",
            marginLeft: "0.5em",
          }}
        />
      </IconButton>
      <Box>
        <Typography
          variant="h2"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontStyle: "italic",
            fontWeight: "600",
            lineHeight: "2.5rem",
          }}
        >
          ¿Quiénes Somos?
        </Typography>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            fontFamily: "Montserrat",
            fontSize: "1rem",
            fontStyle: "italic",
            fontWeight: "600",
            lineHeight: "1.5rem",
            margin: "1.5rem",
          }}
        >
          AM ES UNA COLECCIÓN DE LAS MEJORES MULTIMARCAS DE ARGENTINA, QUE
          APUESTA POR EL DISEÑO, LA COMODIDAD Y EL ESTILO.
        </Typography>
        <Typography
          variant="p"
          color="initial"
          sx={{
            fontFamily: "Montserrat",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.5rem",
            marginInlineStart: "2rem",
          }}
        >
          <p>
            AM Indumentaria es una tienda especializada en ropa y complementos.
            Ofrecemos moda a todo tipo de mujeres que buscan un estilismo
            elegante, femenino y diferenciador para el día a día y los momentos
            más especiales.
          </p>
          <p>
            Buscamos las últimas tendencias en moda a la vez que nos adaptamos a
            las exigencias de nuestras consumidoras.
          </p>
        </Typography>
      </Box>
    </Box>
  );
};
