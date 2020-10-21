import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import List from '../data';
import { red } from '@material-ui/core/colors';

const state = {
  bodycolor: 'green',
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    maxHeight: 210,
  },
  media: {
    height: 0,
    paddingTop: '60.25%', // 16:9
    backgroundColor: '#f0f0f0',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CoffeeCard = () => {
  const classes = useStyles();
  return List.map((list, key) => (
    <Grid item xs={12} sm={4} className="grow ">
      <Link className="text" to="/cart" color={state.color}>
        <Card className={classes.root} key={key.id}>
          <CardMedia
            className={classes.media}
            image={list.img}
            title="Paella dish"
          />
          <CardContent>
            <div className="card-content">
              <h3>{list.title}</h3>
            </div>
            <div className="check">
              <span style={{ color: 'red', marginTop: '70px' }}>
                {list.price}
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  ));
};
export default CoffeeCard;
