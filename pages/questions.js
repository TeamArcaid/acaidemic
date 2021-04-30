import React, { useEffect, useState } from "react";
import { Button, CardActions, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    backgroundColor: '#A8D9C4',

  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  name: {
    margin: "auto",
  },
  button: {
    backgroundColor: '#FF8576',
    color: 'white',
    fontWeight: 'bold',
  },
  question: {
    backgroundColor: `${theme.palette.common.white}`,
    color: '#0C2722',
    '&:hover': {
      color: `${theme.palette.common.white}`,
      backgroundColor: '#3D7046',
    },
  },
}));

export default function questions() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="h3" className={classes.title}>
        Sage
      </Typography>
      <CardContent>
        <Typography variant="h6">
          Choose one question you would like to answer
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button className={classes.question} size="large" component={Link} href="/answer">
            How is this affecting me?
          </Button>
          <Button className={classes.question} size="large" component={Link} href="/answer">
            What is within my control and what is not?
          </Button>
          <Button className={classes.question} size="large" component={Link} href="/answer">
            What will bring me comfort right now?
          </Button>
          <Button className={classes.question} size="large" component={Link} href="/answer">
            If there's someone involved, can they be talked with?
          </Button>
          <Button className={classes.question} size="large" component={Link} href="/answer">
            What can I do to succeed?
          </Button>
        </ButtonGroup>
        <Button className={classes.button} variant="contained" component={Link} href="/">
          Exit
        </Button>
      </CardActions>
    </Card>
  );
}
