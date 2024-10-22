import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PassErrorMsg from './PassErrorMsg';
import { passwordSchema } from '../utils/yupSchemas';

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

const ChangePass = () => {
  const [formData, setFormData] = useState([]);
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: passwordSchema,
  });
  const toggle = () => setOpen(!open);

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
    <div data-testid="changePass" className={classes.field}>
      <Grid item xs={12} md={12}>
        <button
          data-testid="showButton"
          type="button"
          className={classes.btn}
          onClick={() => toggle()}
        >
          CHANGE PASSWORD
        </button>
      </Grid>
      {open && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="oldPassword">
                {' '}
                Old Password *
                <input
                  type="password"
                  className={classes.input}
                  name="oldPassword"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.oldPassword && (
                  <small className={classes.err}>{errors.oldPassword.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div>
              <label htmlFor="newPassword">
                {' '}
                New Password *
                <input
                  type="password"
                  className={classes.input}
                  name="newPassword"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.newPassword && (
                  <PassErrorMsg
                    message={errors.newPassword.message}
                    data-testid="passErrMsg"
                  />
                )}
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
                  className={classes.input}
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.confirmPassword && (
                  <small className={classes.err}>{errors.confirmPassword.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <button type="submit" data-testid="submitButton" className={classes.btn}>
              SET NEW PASSWORD
            </button>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default ChangePass;
