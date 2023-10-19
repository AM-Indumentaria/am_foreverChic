import { Grid, Typography } from "@mui/material";

export const GuiaTalles = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          padding: "1rem",
        }}
      >
        {/* Fila del título "Guía de Talles" */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              fontStyle: "italic",
              fontWeight: 600,
              backgroundColor: "black",
              color: "white",
              padding: ".3rem",
            }}
          >
            Guía de talles
          </Typography>
        </Grid>

        {/* Columna 1 - Talles */}
        <Grid className="grid_column" item xs={3} sm={3} md={3}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: ".2rem",
            }}
          >
            Talles
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            S
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            M
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            L
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            XL
          </Typography>
        </Grid>

        {/* Columna 2 - Pecho */}
        <Grid className="grid_column" item xs={3} sm={3} md={3}>
          <Typography
            className="grid_titulo"
            variant="h6"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: ".2rem",
            }}
          >
            Pecho
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            77-82 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            83-88 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            83-88 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            95-101 cm
          </Typography>
        </Grid>

        {/* Columna 3 - Cintura */}
        <Grid className="grid_column" item xs={3} sm={3} md={3}>
          <Typography
            className="grid_titulo"
            variant="h6"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: ".2rem",
            }}
          >
            Cintura
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            61-66 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            67-72 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            73-78 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            79-85 cm
          </Typography>
        </Grid>

        {/* Columna 4 - Cadera */}
        <Grid className="grid_column" item xs={3} sm={3} md={3}>
          <Typography
            className="grid_titulo"
            variant="h6"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 400,
              backgroundColor: "#d0ad99",
              padding: ".2rem",
            }}
          >
            Cadera
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            86-91 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            92-97 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            98-103 cm
          </Typography>
          <Typography
            className="grid_item"
            variant="body1"
            align="center"
            md
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: ".7rem",
              fontStyle: "normal",
              fontWeight: 400,
              border: "solid 1px black",
              marginY: ".7rem",
              padding: ".3rem",
            }}
          >
            104-110 cm
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
