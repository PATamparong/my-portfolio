import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "120px",
  },
}));
function Home(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          Precious Angel Tamparong
        </Typography>

        <Typography variant="p" gutterBottom>
          Software Developer
        </Typography>
      </div>
    </Container>
  );
}

export default Home;
