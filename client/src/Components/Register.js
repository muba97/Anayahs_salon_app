import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { registerSchema } from '../utils/yupSchemas';
import PassErrorMsg from './PassErrorMsg';

const useStyles = makeStyles({
  field: {
    flexWrap: 'wrap',
    minWidth: '16em',
    maxWidth: '16em',
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '0.25em',
    marginBottom: 10,
    width: '100%',
    border: '0.0625em solid gray',
    padding: '0.625em 0.9375em',
    fontSize: '12px',
    '&:disabled': {
      opacity: '40%',
    },
  },
  btn: {
    background: '#000000',
    border: 0,
    borderRadius: '0.25em',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    height: 40,
    width: '100%',
    marginTop: '0.3125em',
    marginBottom: '0.3125em',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
  err: {
    color: 'red',
    marginBottom: '0.3125em',
  },
  text: {
    marginBottom: 40,
    textDecorationLine: 'none',
  },
});

const Register = () => {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: registerSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    setFormData(data);
  };

  const classes = useStyles();

  return (
    <div data-testid="register" className={classes.field}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="firstName">
                {' '}
                First Name *
                <input
                  data-testid="input-firstName"
                  type="text"
                  className={classes.input}
                  name="firstName"
                  placeholder="First Name"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.firstName && (
                  <small className={classes.err}>{errors.firstName.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="lastName">
                {' '}
                Last Name *
                <input
                  type="text"
                  className={classes.input}
                  name="lastName"
                  placeholder="Last Name"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.lastName && (
                  <small className={classes.err}>{errors.lastName.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="email">
                {' '}
                Email *
                <input
                  type="text"
                  name="email"
                  placeholder="example@email.com"
                  className={classes.input}
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
              <label htmlFor="birthDay">
                {' '}
                Birthday *
                <input
                  type="text"
                  name="birthDay"
                  placeholder="mm/dd/yyyy"
                  className={classes.input}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.birthDay && (
                  <small className={classes.err}>{errors.birthDay.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="phoneNumber">
                {' '}
                Phone Number *
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="xxx-xxx-xxx"
                  max={12}
                  className={classes.input}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.phoneNumber && (
                  <small className={classes.err}>{errors.phoneNumber.message}</small>
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
                  name="password"
                  placeholder="password"
                  className={classes.input}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.password && <PassErrorMsg message={errors.password.message} />}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="confirmPassword">
                {' '}
                Confirm Password *
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="password"
                  className={classes.input}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.confirmPassword && (
                  <small className={classes.err}>{errors.confirmPassword.message}</small>
                )}
              </label>
            </div>
            <Grid item xs={12} md={12}>
              <button type="submit" data-testid="signup-submit" className={classes.btn}>
                SIGN UP
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className={classes.text}>
        <small>
          Already have an account? Log in{' '}
          <Link to="/login" className={classes.text}>
            here
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
