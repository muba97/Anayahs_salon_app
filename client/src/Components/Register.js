import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import inputSchema from '../utils/inputSchema';

const useStyles = makeStyles({
  field: {
    margin: 10,
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '4px',
    width: '120%',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 20,
    fontSize: '12px',
    '&:disabled': {
      opacity: '40%',
    },
  },
  btn: {
    background: '#000000',
    border: 0,
    borderRadius: 3,
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    height: 40,
    width: '111%',
    margin: 10,
    marginBottom: '5px',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
  err: {
    color: 'red',
  },
  text: {
    marginBottom: 40,
    textDecorationLine: 'none',
  },
});

const Register = () => {
  const [formData, setFormData] = useState([]);
  const [emptyPass, setEmptyPass] = useState(false);
  const [notSamePass, setNotSamePass] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: inputSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setNotSamePass(true);
    } else if (data.password === '' || data.confirmPassword === '') {
      setEmptyPass(true);
    } else {
      setFormData(data);
      setEmptyPass(false);
      setNotSamePass(false);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.field}>
            <label htmlFor="firstName">
              {' '}
              First Name
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
          <div className={classes.field}>
            <label htmlFor="lastName">
              {' '}
              Last Name
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
          <div className={classes.field}>
            <label htmlFor="email">
              {' '}
              Email
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
          <div className={classes.field}>
            <label htmlFor="birthDay">
              {' '}
              Birthday
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
          <div className={classes.field}>
            <label htmlFor="phoneNumber">
              {' '}
              Phone Number
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
          <div className={classes.field}>
            <label htmlFor="password">
              {' '}
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                className={classes.input}
                ref={register}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div className={classes.field}>
            <label htmlFor="confirmPassword">
              {' '}
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                placeholder="password"
                className={classes.input}
                ref={register}
                onChange={(e) => handleChange(e)}
              />
              {emptyPass && <small className={classes.err}>Passwords required</small>}
              {notSamePass && (
                <small className={classes.err}>Passwords not matching</small>
              )}
            </label>
          </div>
          <button type="submit" data-testid="edit-submit" className={classes.btn}>
            SIGN UP
          </button>
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
