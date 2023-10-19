import { Grid, Typography } from "@mui/material";
import silueta_talles from "../../../assets/silueta_talles.webp";

export const GuiaTalles = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ padding: "1rem" }}>
        {/* Fila del título "Guía de Talles" */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "1.5rem", md: "1.7rem", lg: "2.2rem" },
              fontStyle: "italic",
              fontWeight: 600,
              backgroundColor: "black",
              color: "white",
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
            }}
          >
            Guía de talles
          </Typography>
        </Grid>

        {/* Columna 1 - Talles */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "1rem", md: "1.3rem", lg: "1.7rem" },
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
            }}
          >
            Talles
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            S
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            M
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            L
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            XL
          </Typography>
        </Grid>

        {/* Columna 2 - Pecho */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "1rem", md: "1.3rem", lg: "1.7rem" },
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
            }}
          >
            Pecho
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            77-82 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            83-88 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            83-88 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            95-101 cm
          </Typography>
        </Grid>

        {/* Columna 3 - Cintura */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "1rem", md: "1.3rem", lg: "1.7rem" },
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
            }}
          >
            Cintura
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            61-66 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            67-72 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            73-78 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            79-85 cm
          </Typography>
        </Grid>

        {/* Columna 4 - Cadera */}
        <Grid item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "1rem", md: "1.3rem", lg: "1.7rem" },
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
            }}
          >
            Cadera
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            86-91 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            92-97 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            98-103 cm
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: ".7rem", md: ".9rem", lg: "1.4rem" },
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: { xs: ".7rem", md: ".5rem", lg: ".3rem" },
              marginX: { xs: "0", md: ".5rem", lg: "2rem" },
              padding: { xs: ".3rem", md: ".5rem", lg: ".8rem" },
            }}
          >
            104-110 cm
          </Typography>
        </Grid>
      </Grid>

      {/* Nota */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ padding: { xs: "1.5rem", md: "2rem", lg: "2.5rem" } }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.875rem", md: ".9rem", lg: "1.15rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { xs: "1.5rem", md: "1.7rem", lg: "2rem" },
          }}
        >
          Nota:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.68rem", md: ".8rem", lg: "1rem" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: { xs: "1.5rem", md: "1.7rem", lg: "2rem" },
            marginY: { xs: ".5rem", md: ".7rem", lg: "1rem" },
          }}
        >
          Cada prenda y modelo se caracterizan por ser únicos y distintos en
          cuanto a sus medidas, las cuales varían según el diseño de su patrón y
          su estilo. Las medidas proporcionadas en la tabla hacen referencia a
          las dimensiones aproximadas del cuerpo promedio expresados en
          centímetros. El sistema es orientativo y no garantiza con exactitud
          cómo quedarán las prendas en el sujeto.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.875rem", md: ".9rem", lg: "1rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { xs: "1.5rem", md: "1.7rem", lg: "2rem" },
            marginY: { xs: "1rem", md: ".7rem", lg: "1rem" },
          }}
        >
          Para saber cuál es tu talle, seguí los siguientes pasos:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { xs: "normal", md: "1.7rem", lg: "2rem" },
            marginY: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
          }}
        >
          1. PECHO
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.68rem", md: ".8rem", lg: "1rem" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: { xs: "normal", md: "1.7rem", lg: "2rem" },
            marginTop: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
          }}
        >
          Para saber qué talle tenés, rodeá tus pectorales con una cinta métrica
          flexible en la parte de mayor volumen.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { xs: "normal", md: "1.7rem", lg: "2rem" },
            marginTop: { xs: ".5rem", md: ".4rem", lg: ".6rem" },
          }}
        >
          2. CINTURA
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.68rem", md: ".8rem", lg: "1rem" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: { xs: "normal", md: "1.7rem", lg: "2rem" },
            marginTop: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
          }}
        >
          Rodeá la parte más estrecha de tu cintura con una cinta métrica.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { xs: "normal", md: "1.7rem", lg: "2rem" },
            marginTop: { xs: ".5rem", md: ".4rem", lg: ".6rem" },
          }}
        >
          3. CADERA
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "0.68rem", md: ".8rem", lg: "1rem" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: { xs: "normal", md: "1.7rem", lg: "2rem" },
            marginTop: { xs: ".2rem", md: ".4rem", lg: ".6rem" },
          }}
        >
          Parate con los pies juntos y rodea tus caderas con una cinta métrica
          en la parte de mayor volumen.
        </Typography>
      </Grid>

      {/* Imagen de la silueta */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
      >
        <img
          src={silueta_talles}
          alt="Silueta de talles"
          style={{ width: "16rem" }}
        />
      </Grid>
    </>
  );
};
