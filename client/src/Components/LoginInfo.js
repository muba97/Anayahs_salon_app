import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    margin: 10,
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    width: '120%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 20,
    fontSize: '12px',
  },
  btn: {
    background: '#000000',
    border: 0,
    borderRadius: 3,
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(''),
    height: 40,
    width: '112.5%',
    margin: 10,
    marginBottom: '5px',
  },
  p: {
    paddingLeft: '10px',
  },
});

const LoginInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <form>
        <div className={classes.field}>
          <label htmlFor="email">
            {' '}
            Email
            <input
              type="text"
              className={classes.input}
              name="email"
              placeholder="Email"
            />
          </label>
        </div>
        <div className={classes.field}>
          <label htmlFor="password">
            {' '}
            Password
            <input
              type="password"
              className={classes.input}
              name="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button type="submit" className={classes.btn}>
          LOGIN
        </button>
        <p className={classes.p}>
          {"Don't have an account? "} <Link to="/profile">Register Now</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginInfo;
