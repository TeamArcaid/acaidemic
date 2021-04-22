import React, { useEffect, useState } from 'react';
import { Button, CardActions, ButtonGroup, SvgIcon, Avatar } from '@material-ui/core';
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

export default function garden() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="h3" className={classes.title}>
        Sage
      </Typography>
      <CardContent>
        <Typography variant="h6">Pick a plant!</Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button
            size="large"
            startIcon={<Avatar src="./../assets/images/monstera2.svg" />}
            component={Link}
            to="/"
          >
            Plant
          </Button>
          <Button
            size="large"
            startIcon={<Avatar src="./../assets/images/monstera2.svg" />}
            component={Link}
            to="/"
          >
            Plant
          </Button>
          <Button
            size="large"
            startIcon={<Avatar src="./../assets/images/monstera2.svg" />}
            component={Link}
            to="/"
          >
            Plant
          </Button>
          <Button
            size="large"
            startIcon={<Avatar src="./../assets/images/monstera2.svg" />}
            component={Link}
            to="/"
          >
            Plant
          </Button>
          <Button
            size="large"
            startIcon={<Avatar src="./../assets/images/monstera2.svg" />}
            component={Link}
            to="/"
          >
            Plant
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
