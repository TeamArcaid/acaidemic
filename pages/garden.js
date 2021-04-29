import React, { useEffect, useState } from "react";
import { Button, CardActions, ButtonGroup, Avatar } from "@material-ui/core";
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
    backgroundColor: `${theme.palette.common.white}`,
    color: '#0C2722'
  }
}));

export default function garden() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="h3" className={classes.title}>
        Sage
      </Typography>
      <CardContent>
        <Typography align="center" variant="h6">Pick a plant!</Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
          align="center"
        >
          <Button
            className={classes.button}
            size="large"
            startIcon={<Avatar src="/1_plant_edu.svg" />}
            component={Link}
            href="/questions"
          >
            Small Cacti
          </Button>
          <Button
            className={classes.button}
            size="large"
            startIcon={<Avatar src="/2_plant_edu.svg" />}
            component={Link}
            href="/questions"
          >
            Chinese Money Plant
          </Button>
          <Button
            className={classes.button}
            size="large"
            startIcon={<Avatar src="/3_altplants_edu.svg" />}
            component={Link}
            href="/questions"
          >
            Jade Plant
          </Button>
          <Button
            className={classes.button}
            size="large"
            startIcon={<Avatar src="/4_plant_edu.svg" />}
            component={Link}
            href="/questions"
          >
            Rubber Tree
          </Button>
          <Button
            className={classes.button}
            size="large"
            startIcon={<Avatar src="/5_plant_edu.svg" />}
            component={Link}
            href="/questions"
          >
            Date Palm
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
