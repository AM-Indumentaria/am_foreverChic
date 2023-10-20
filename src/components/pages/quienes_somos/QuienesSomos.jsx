import { Box, Typography } from "@mui/material";
import logo_AM_transparente from "../../../assets/logo_AM_transparente.webp";

export const QuienesSomos = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(208, 173, 153, 0.10)",
        padding: ".4rem",
      }}
    >
      {/* Modo MOBILE */}
      <Box
        item
        sx={{
          display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          flexDirection: { xs: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src={logo_AM_transparente}
            alt="Logo"
            style={{
              width: "3.5rem",
              marginLeft: "0.5rem",
            }}
          />
          <Typography
            variant="h2"
            color="initial"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontStyle: "italic",
              fontWeight: "600",
              lineHeight: "2.5rem",
              marginLeft: "3rem",
            }}
          >
            ¿Quiénes Somos?
          </Typography>
        </Box>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            fontFamily: "Montserrat",
            fontSize: { xs: ".81rem", md: "none", lg: "none" },
            fontStyle: "italic",
            fontWeight: "600",
            lineHeight: { xs: "1.5rem", md: "none", lg: "none" },
            marginX: { xs: "1rem", md: "none", lg: "none" },
          }}
        >
          AM ES UNA COLECCIÓN DE LAS MEJORES MULTIMARCAS DE ARGENTINA, QUE
          APUESTA POR EL DISEÑO, LA COMODIDAD Y EL ESTILO.
        </Typography>
        <Typography
          variant="p"
          color="initial"
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            flexDirection: { xs: "column" },
            textAlign: { xs: "none", md: "none", lg: "none" },
            fontFamily: "Montserrat",
            fontSize: { xs: ".75rem", md: "none", lg: "none" },
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.6rem",
            marginX: { xs: "1rem", md: "none", lg: "none" },
            marginTop: { xs: ".5rem", md: "none", lg: "none" },
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

      {/* Modo TABLET/DESKTOP */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <Box
          className="caja1"
          item
          sx={{
            display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
            width: "60vw",
            margin: {
              sm: ".5rem .5rem .5rem 4rem",
              md: "2rem",
              lg: "4rem",
              xl: "5rem",
            },
          }}
        >
          <img
            src={logo_AM_transparente}
            alt="Logo"
            style={{
              width: "100%",
              maxHeight: "50vw",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          />
        </Box>

        <Box className="caja2" sx={{ padding: "2rem", alignSelf: "center" }}>
          <Typography
            variant="h2"
            color="initial"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              textAlign: { sm: "center", md: "center", lg: "left" },
              fontFamily: "Montserrat",
              fontSize: { sm: "1.5rem", md: "1.5rem", lg: "2rem" },
              fontStyle: "italic",
              fontWeight: "600",
              lineHeight: { md: "3rem", lg: "3.5rem" },
              margin: {
                sm: "0 2.5rem 1.5rem 2.5rem",
                md: "0 2.5rem 1.5rem 2.5rem",
                lg: "0 10rem 1.5rem 2.5rem",
              },
              justifyContent: { sm: "center", md: "center", lg: "center" },
            }}
          >
            ¿Quiénes Somos?
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              textAlign: { sm: "center", md: "center", lg: "left" },
              fontFamily: "Montserrat",
              fontSize: { sm: "0.9rem", md: "0.95rem", lg: "1rem" },
              fontStyle: "italic",
              fontWeight: "600",
              lineHeight: { sm: "1.25rem", md: "1.25rem", lg: "1.5rem" },
              margin: {
                sm: "0 2.5rem 1.5rem 2.5rem",
                md: "0 2.5rem 1.5rem 2.5rem",
                lg: "0 10rem 1.5rem 2.5rem",
              },
            }}
          >
            AM ES UNA COLECCIÓN DE LAS MEJORES MULTIMARCAS DE ARGENTINA, QUE
            APUESTA POR EL DISEÑO, LA COMODIDAD Y EL ESTILO.
          </Typography>
          <Typography
            variant="p"
            color="initial"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              flexDirection: "column",
              textAlign: { md: "center", lg: "left" },
              fontFamily: "Montserrat",
              fontSize: { md: "0.8rem", lg: "0.9rem" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: { md: "1.25rem", lg: "1.5rem" },
              margin: {
                sm: "0 2.5rem 2rem 2.5rem",
                md: "0 2.5rem 2rem 2.5rem",
                lg: "0 10rem 1.5rem 2.5rem",
              },
            }}
          >
            <p>
              AM Indumentaria es una tienda especializada en ropa y
              complementos. Ofrecemos moda a todo tipo de mujeres que buscan un
              estilismo elegante, femenino y diferenciador para el día a día y
              los momentos más especiales.
            </p>
            <p>
              Buscamos las últimas tendencias en moda a la vez que nos adaptamos
              a las exigencias de nuestras consumidoras.
            </p>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
