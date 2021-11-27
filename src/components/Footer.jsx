import React from "react";
import {
  Grid,
  Typography,
  InputLabel,
  makeStyles,
  Container,
  Input,
  FormControl,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { CgArrowLongRight } from "react-icons/cg";
import LOGO from '../utils/images/tuttytour.png'


const useStyles = makeStyles({
  root: {
    minHeight: "30vh",
    padding: "4rem 0.5rem",
  },
  divider: {
    marginBottom: "1rem",
    width: "fit-content",
  },
  line: {
    borderTop: "1px solid #d3d3d3",
    marginTop: "10rem",
  },

  textInputStyles: {
    minWidth: "400px",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.line}>
      <Container>
        <Grid
          container
          className={classes.root}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h3"><img src={LOGO} alt="logo" /> </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            direction="column"
            alignItems="flex-end"
          >
            <Grid item>
              <Typography variant="h6" className={classes.divider}>
              Boletín de noticias
              </Typography>
              <Typography variant="body2" className={classes.divider}>
              ¡Suscríbase y obtenga descuentos cada semana!
              </Typography>
              <form autoComplete="off" noValidate className={classes.divider}>
                <FormControl>
                  <InputLabel htmlFor="standard-adornment-password">
                  Introduzca su dirección de correo electrónico
                  </InputLabel>

                  <Input
                    id="standard-adornment-password"
                    className={classes.textInputStyles}
                    onChange={(e) => console.log(e.target)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <CgArrowLongRight />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </form>
              <Typography variant="caption" style={{ width: "fit-content" }}>
                *Sin spam garantízado 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
