import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuIcon from '@material-ui/icons/Menu';
import windowSize from 'react-window-size';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ea4747',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontFamily: 'Fjalla One',
    fontStyle: 'italic',
    fontSize: '30px',
    textDecoration: 'none',
  },

  button: {
    color: 'white',
    fontFamily: 'Fjalla One',
    fontSize: '20px',
  },
}));
// const toggle = (e) => {
//   e.preventDefault();
//   return (
//     <div
//       style={{
//         backgroundColor: 'green',
//         textAlign: 'center',
//         height: '100%',

//         opacity: '1',
//       }}
//     >
//       <h3>haris</h3>
//       <h3>haris</h3>
//       <h3>haris</h3>
//       <h3>haris</h3>
//     </div>
//   );
// };
const Navbar = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const toggle = () => setClick(!click);

  return (
    <div className={classes.root}>
      <Toolbar>
        <Link className="links" to="/" className={classes.title}>
          NIKE
        </Link>
        <div className="link-responsive">
          <Link className="links margin-1" to="/men" color="inherit">
            MEN
          </Link>
          <Link className="links margin-2" to="/women" color="inherit">
            WOMEN
          </Link>
          <Link className="links margin-3" to="/kid" color="inherit">
            KID
          </Link>
        </div>
        <div className="mobile-1" onClick={toggle}>
          <Button className={classes.button} color="inherit">
            {!click ? (
              <div> Login</div>
            ) : (
              <div
                style={{
                  backgroundColor: 'green',
                  textAlign: 'center',
                  height: '100%',

                  opacity: '1',
                }}
              >
                <h3>haris</h3>
              </div>
            )}
          </Button>
        </div>
        <div className="mobile-2">
          <Button className={classes.button} color="inherit">
            <AiOutlineMenu size={30} />
          </Button>
        </div>
      </Toolbar>
    </div>
  );
};

export default Navbar;
