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
import NewNavbar from './Newnavbar';
import '../Men.css';

const state = {
  link: '/',
  color: '#f0f0f0',
};

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

const Men = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: state.color,
        padding: '0px 0px 30px 0px ',
      }}
    >
      <NewNavbar state={state.link} />
      <div className="sneakers">
        <li>
          SHOW ME <span className="underline">SNEAKERS</span>
          <span>
            <RiArrowDropDownLine
              size={40}
              style={{
                position: 'absolute',
                top: '80px',
                left: '930px',
              }}
            />
          </span>
        </li>
        <li>
          SHOW ME <span className="underline">SNEAKERS</span>
          <span>
            <RiArrowDropDownLine
              size={40}
              style={{
                position: 'absolute',
                top: '80px',
                left: '750px',
              }}
            />
          </span>
        </li>
        <li>
          SHOW ME <span className="underline">SNEAKERS</span>
          <span>
            <RiArrowDropDownLine
              size={40}
              style={{
                position: 'absolute',
                top: '80px',
                left: '570px',
              }}
            />
          </span>
        </li>
      </div>
      <Layout />
    </div>
  );
};

export default Men;
