import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { StylesProvider } from '@material-ui/styles';
import { GrLinkPrevious } from 'react-icons/gr';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoIosCart } from 'react-icons/io';
import Layout from './Layout';
import '../Men.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
}));

const Newnavbar = ({ state }) => {
  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to={state}>
                {' '}
                <GrLinkPrevious />
              </Link>
            </Typography>
            <Button color="inherit" style={{ color: 'black' }}>
              <IoIosCart style={{ marginRight: '10px', fontSize: '20px' }} />
              CART
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </StylesProvider>
  );
};

export default Newnavbar;
