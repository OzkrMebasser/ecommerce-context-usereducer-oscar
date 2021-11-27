import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import TodosLosTours from "../utils/images/tours.gif";

export const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${TodosLosTours})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
    position: "relative",
    padding: "1rem 0",
  },
  dullBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
    opacity: 0.6,
    zIndex: 1,
  },
  headingText: {
    color: "#fff",
    fontWeight: 800,
    zIndex: 3,
    maxWidth: "80%",
    
  },
});

export const ResultsHeader = ({ maintext, children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      <Box className={classes.dullBackground} />
      <Typography align="center" variant="h3" className={classes.headingText}>
        {maintext}
      </Typography>
      {children}
    </Grid>
  );
};
