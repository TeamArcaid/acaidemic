import React from "react"
import { Button, CardActions } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import landing from "../assets/images/Backgrounds/01 Artwork.svg"

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        SAGE 
      </Typography>
      <CardMedia className={classes.media} image={landing} title="splash garden" />
      <CardContent>
        <Typography variant="body2" component="p">
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" component={Link} to="/menu">
          New Plant
        </Button>
      </CardActions>
    </Card>
  )
}
