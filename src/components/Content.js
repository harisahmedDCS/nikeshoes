import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import List from '../data';

const Content = () => {
  return (
    <Grid container spacing={4}>
      <CoffeeCard />
    </Grid>
  );
};
export default Content;
