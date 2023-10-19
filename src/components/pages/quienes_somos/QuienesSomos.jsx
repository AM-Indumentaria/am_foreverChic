import { Box, Grid, Typography } from "@mui/material";
import logo_AM_transparente from "../../../assets/logo_AM_transparente.webp";

export const QuienesSomos = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(208, 173, 153, 0.10)",
        padding: ".4rem",
      }}
    >
      <Grid item xs={12} sm={6} md={6}>
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
            ¿Quiénes Somos? {/* Logo y título para TABLET/DESKTOP */}
            <Grid item xs={12} sm={12} md={12}>
              <Box
                item
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                }}
              >
                <img
                  src={logo_AM_transparente}
                  alt="Logo"
                  style={{
                    width: "25rem",
                    padding: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "0.5rem",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color="initial"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    fontSize: { sm: "1.5rem", md: "2rem" },
                    fontStyle: "italic",
                    fontWeight: "600",
                    lineHeight: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    marginLeft: { xs: "3rem", sm: "0", md: "0" },
                    display: { xs: "none", sm: "flex", md: "flex" },
                    justifyContent: { xs: "none", sm: "center", md: "center" },
                  }}
                >
                  ¿Quiénes Somos?
                </Typography>

                {/* Resto del párrafo */}
                <Typography
                  variant="h4"
                  color="initial"
                  sx={{
                    textAlign: { xs: "none", sm: "center", md: "center" },
                    fontFamily: "Montserrat",
                    fontSize: { xs: ".87rem", sm: "0.95rem", md: "1rem" },
                    fontStyle: "italic",
                    fontWeight: "600",
                    lineHeight: { xs: "1.5rem", sm: "", md: "" },
                    marginX: { xs: "1rem", sm: "", md: "" },
                  }}
                >
                  AM ES UNA COLECCIÓN DE LAS MEJORES MULTIMARCAS DE ARGENTINA,
                  QUE APUESTA POR EL DISEÑO, LA COMODIDAD Y EL ESTILO.
                </Typography>
                <Box
                  variant="p"
                  color="initial"
                  sx={{
                    textAlign: { xs: "none", sm: "center", md: "center" },
                    fontFamily: "Montserrat",
                    fontSize: { xs: ".75rem", sm: "0.8rem", md: "0.9rem" },
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.6rem",
                    marginX: { xs: "1rem", sm: "", md: "" },
                    marginTop: { xs: ".5rem", sm: "", md: "" },
                  }}
                >
                  <p>
                    AM Indumentaria es una tienda especializada en ropa y
                    complementos. Ofrecemos moda a todo tipo de mujeres que
                    buscan un estilismo elegante, femenino y diferenciador para
                    el día a día y los momentos más especiales.
                  </p>
                  <p>
                    Buscamos las últimas tendencias en moda a la vez que nos
                    adaptamos a las exigencias de nuestras consumidoras.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            fontFamily: "Montserrat",
            fontSize: ".87rem",
            fontStyle: "italic",
            fontWeight: "600",
            lineHeight: "1.5rem",
            marginX: "1rem",
          }}
        >
          AM ES UNA COLECCIÓN DE LAS MEJORES MULTIMARCAS DE ARGENTINA, QUE
          APUESTA POR EL DISEÑO, LA COMODIDAD Y EL ESTILO.
        </Typography>
        <Box
          variant="p"
          color="initial"
          sx={{
            fontFamily: "Montserrat",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.6rem",
            marginX: "1rem",
            marginTop: ".5rem",
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
        </Box>
      </Grid>
    </Grid>
  );
};
