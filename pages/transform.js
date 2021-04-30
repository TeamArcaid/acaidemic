import React from "react";
import { Button, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "../src/Link";
import landing from "../public/Backgrounds/01 Artwork.svg";

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
  media: {
    minHeight: 400,
  },
  button: {
    backgroundColor: '#FF8576',
    color: 'white',
    fontWeight: 'bold',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h1" className={classes.title} align="center">
        SAGE
      </Typography>
      <CardMedia
        className={classes.media}
        image={"/1_plant_edu.svg"}
        title="plant"
      />
      <CardContent>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" component={Link} href="/questions">
          Next Question
        </Button>
      </CardActions>
    </Card>
  );
}