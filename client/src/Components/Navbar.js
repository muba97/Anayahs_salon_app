import React from 'react';
import { Toolbar, AppBar, ButtonBase, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: 'black',
  },
  button: {
    color: 'inherit',
    textDecorationLine: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  smallLogo: {
    height: 50,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link to="/">
            <ButtonBase>
              <img
                alt="logo-icon"
                src="/Anayah-Logo-White.png"
                className={classes.smallLogo}
              />
            </ButtonBase>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
