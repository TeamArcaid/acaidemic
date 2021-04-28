import React, { useEffect, useState } from "react";
import { Button, CardActions, TextField, Slider } from "@material-ui/core";
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
}));

export default function answer(props) {
  const classes = useStyles();
  const [answer, setAnswer] = useState();

  const handleAnswerChange = (event, newValue) => {
    setAnswer(newValue);
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h3" className={classes.title}>
        Sage
      </Typography>
      <CardContent>
        <Typography id="answer">{props.question}</Typography>
        <TextField
          id="client-mind-text"
          aria-labelledby="client-feeling"
          multiline
          rows={10}
          variant="outlined"
          onChange={handleAnswerChange}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" component={Link} href="/questions">
          Back
        </Button>
        <Button variant="contained" component={Link} href="/questions">
          Next
        </Button>
      </CardActions>
    </Card>
  );
}
