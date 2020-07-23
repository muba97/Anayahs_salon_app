import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { loginSchema } from '../utils/yupSchemas';

const useStyles = makeStyles({
  input: {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 20,
    fontSize: '12px',
  },
  btn: {
    background: '#000000',
    border: 0,
    borderRadius: '4px',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(''),
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: '5px',
    '&:hover': {
      opacity: '70%',
    },
  },
  err: {
    color: 'red',
    fontWeight: 'bold',
  },
  text: {
    textDecoration: 'none',
  },
});

const LoginInfo = () => {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: loginSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => console.log(data);

  const classes = useStyles();

  return (
    <div data-testid="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={12}>
          <div>
            <label htmlFor="email">
              {' '}
              Email *
              <input
                type="text"
                className={classes.input}
                name="email"
                placeholder="Email"
                ref={register}
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <small className={classes.err}>{errors.email.message}</small>
              )}
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div>
            <label htmlFor="password">
              {' '}
              Password *
              <input
                type="password"
                className={classes.input}
                name="password"
                placeholder="Password"
                ref={register}
                onChange={(e) => handleChange(e)}
              />
              {errors.password && (
                <small className={classes.err}>{errors.password.message}</small>
              )}
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          {' '}
          <button type="submit" className={classes.btn} data-testid="loginBtn">
            LOGIN
          </button>
        </Grid>
      </form>
      <div className={classes.text}>
        <small>
          {"Don't have an account? "}
          <Link to="/register" className={classes.text}>
            Register Now
          </Link>
        </small>
      </div>
    </div>
  );
};

export default LoginInfo;
