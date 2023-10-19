import { Grid, Typography } from "@mui/material";

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
    </>
  );
};
