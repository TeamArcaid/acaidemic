import React, { useEffect, useState } from "react"
import { Button, CardActions, TextField, Slider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"

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
  name: {
    margin: "auto",
  },
}))

export default function menu() {
  const classes = useStyles()
  const [feeling, setFeeling] = useState(50)

  const handleFeelingChange = (event, newValue) => {
    setFeeling(newValue)
  }

  return (
    <Card className={classes.card}>
      <Typography variant="h3" className={classes.title}>
        Sage
      </Typography>
      <CardContent>
        <Typography id="client-name">What is your name?</Typography>
        <form className={classes.name} autoComplete="off" name="name">
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
        </form>
        <Typography id="client-feeling">How are you feeling?</Typography>
        <Slider
          value={feeling}
          onChange={handleFeelingChange}
          aria-labelledby="client-feeling"
        />
        <Typography id="client-mind">What is on your mind?</Typography>
        <TextField
          id="client-mind-text"
          aria-labelledby="client-feeling"
          multiline
          rows={4}
          variant="outlined"
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" component={Link} to="/">
          Back
        </Button>
        <Button variant="contained" component={Link} to="/garden">
          Next
        </Button>
      </CardActions>
    </Card>
  )
}
