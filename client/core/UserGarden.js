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

export default function usergarden() {
  const classes = useStyles();

  const [plants, setPlants] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setPlants(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])

  return (
    
  );
}
