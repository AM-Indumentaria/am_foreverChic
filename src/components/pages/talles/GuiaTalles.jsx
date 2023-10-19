import { Grid, Typography } from "@mui/material";

export const GuiaTalles = () => {
  return (
    <>
      (
      <Grid container spacing={2}>
        {/* Fila del título "Guía de Talles" */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Guía de Talles
          </Typography>
        </Grid>

        {/* Columna 1 - Talles */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            Talles
          </Typography>
          <Typography variant="body1" align="center">
            S
          </Typography>
          <Typography variant="body1" align="center">
            M
          </Typography>
          <Typography variant="body1" align="center">
            L
          </Typography>
          <Typography variant="body1" align="center">
            XL
          </Typography>
        </Grid>

        {/* Columna 2 - Pecho */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            Pecho
          </Typography>
          <Typography variant="body1" align="center">
            77-82 cm
          </Typography>
          <Typography variant="body1" align="center">
            83-88 cm
          </Typography>
          <Typography variant="body1" align="center">
            83-88 cm
          </Typography>
          <Typography variant="body1" align="center">
            95-101 cm
          </Typography>
        </Grid>

        {/* Columna 3 - Cintura */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            Cintura
          </Typography>
          <Typography variant="body1" align="center">
            61-66 cm
          </Typography>
          <Typography variant="body1" align="center">
            67-72 cm
          </Typography>
          <Typography variant="body1" align="center">
            73-78 cm
          </Typography>
          <Typography variant="body1" align="center">
            79-85 cm
          </Typography>
        </Grid>

        {/* Columna 4 - Cadera */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            Cadera
          </Typography>
          <Typography variant="body1" align="center">
            86-91 cm
          </Typography>
          <Typography variant="body1" align="center">
            92-97 cm
          </Typography>
          <Typography variant="body1" align="center">
            98-103 cm
          </Typography>
          <Typography variant="body1" align="center">
            104-110 cm
          </Typography>
        </Grid>
      </Grid>
      );
    </>
  );
};
