import React, { useEffect, useState } from 'react';
import { Button, CardActions, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
  },
  name: {
    margin: 'auto',
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
        <Typography variant="h6">To begin, choose one question you would like to answer</Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button size="large" component={Link} to="/">
            How is this affecting me?
          </Button>
          <Button size="large" component={Link} to="/">
            What is within my control and what is not?
          </Button>
          <Button size="large" component={Link} to="/">
            What will bring me comfort right now?
          </Button>
          <Button size="large" component={Link} to="/">
            If there's someone involved, can they be talked with?
          </Button>
          <Button size="large" component={Link} to="/">
            What can I do to succeed?
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
