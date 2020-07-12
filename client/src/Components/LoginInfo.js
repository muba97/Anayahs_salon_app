import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  email: yup.string().email('Valid email is required').required('Email is required'),
  password: yup.string().required('Password is required').min(7, 'Password is too short'),
});

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
    '&:hover': {
      opacity: '70%',
    },
  },
  err: {
    color: 'red',
    fontWeight: 'bold',
  },
  text: {
    paddingLeft: '10px',
  },
});

const LoginInfo = () => {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: editSchema,
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label htmlFor="email">
            {' '}
            Email
            <input
              type="text"
              className={classes.input}
              name="email"
              placeholder="Email"
              ref={register}
              onChange={(e) => handleChange(e)}
            />
          </label>
          {errors.email && <small className={classes.err}>{errors.email.message}</small>}
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
              ref={register}
              onChange={(e) => handleChange(e)}
            />
          </label>
          {errors.password && (
            <small className={classes.err}>{errors.password.message}</small>
          )}
        </div>
        <button type="submit" className={classes.btn}>
          LOGIN
        </button>
      </form>
      <p className={classes.text}>
        {"Don't have an account? "} <Link to="/profile">Register Now</Link>
      </p>
    </div>
  );
};

export default LoginInfo;
