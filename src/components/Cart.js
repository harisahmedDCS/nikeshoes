import React from 'react';
import NewNavbar from './Newnavbar';
import { Grid } from '@material-ui/core';
import CartContent from './CartContent';
import CartContents from './CartContents';
const state = {
  link: '/men',
};

const Cart = () => {
  return (
    <>
      <Grid container direction="column">
        <NewNavbar state={state.link} />
        <Grid container item>
          <Grid item xs={6} sm={6}>
            <CartContent />
          </Grid>
          <Grid item xs={6} sm={6}>
            <CartContents />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Cart;
