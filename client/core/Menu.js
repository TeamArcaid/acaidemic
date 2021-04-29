import React, { useEffect, useState } from 'react';
import { Button, CardActions, TextField, Slider, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { create } from '../plant/api-plant.js';

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
  button: {
    backgroundColor: '#FF8576',
    color: 'white',
    fontWeight: 'bold',
  },
}));

export default function menu() {
  const classes = useStyles();
  const [feeling, setFeeling] = useState(50);

  const [values, setValues] = useState({
    problem: '',
    error: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    console.log('clickSubmit function called');
    const plant = {
      problem: values.problem || undefined,
    };
    create(plant).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '' });
      }
    });
  };

  const handleFeelingChange = (event, newValue) => {
    setFeeling(newValue);
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h3" className={classes.title}>
        Questions
      </Typography>
      <CardContent>
        <Typography id="client-name">What is your name?</Typography>
        <FormControl fullWidth className={classes.name} autoComplete="off" name="name">
          <TextField id="outlined-basic" variant="outlined" />
        </FormControl>
        <Typography id="client-feeling">How are you feeling now?</Typography>
        <Slider value={feeling} onChange={handleFeelingChange} aria-labelledby="client-feeling" />
        <Typography id="client-mind">In a few words, what's on your mind?</Typography>
        <FormControl fullWidth id="client-mind-text">
          <TextField
            aria-labelledby="client-feeling"
            multiline
            rows={4}
            variant="outlined"
            value={values.problem}
            onChange={handleChange('problem')}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" component={Link} to="/">
          Back
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={clickSubmit}
          component={Link}
          to="/garden"
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
}
