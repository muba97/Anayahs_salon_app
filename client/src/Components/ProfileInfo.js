import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { profileSchema } from '../utils/yupSchemas';
import ChangePass from './ChangePass';

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
  },
});

const emptyKeysObj = (obj) => {
  const emptyObj = Object.keys(obj).every((key) => {
    return obj[key] === '';
  });
  return emptyObj;
};

const atLeastOneEmptyKey = (obj) => {
  const oneFound = Object.keys(obj).some((key) => {
    return obj[key] === '';
  });
  return oneFound;
};

const ProfileInfo = ({ userInfo }) => {
  const [initialData, setinitialData] = useState(userInfo);
  const [formData, setFormData] = useState(userInfo);
  const [edit, setEdit] = useState(true);
  const { register, handleSubmit, errors, reset } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: profileSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    if (edit !== false) {
      setinitialData(data);
      setFormData(data);
    }
  };

  const cancelClick = () => {
    setEdit(true);
    reset(initialData);
    if (initialData !== formData) {
      setFormData(initialData);
    }
  };

  const handleClick = () => {
    if (emptyKeysObj(formData) || atLeastOneEmptyKey(formData)) {
      setEdit(false);
    } else {
      setEdit(!edit);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.field} data-testid="profileInfo">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={12}>
          <div>
            <label htmlFor="firstName">
              {' '}
              First Name
              <input
                data-testid="input-firstName"
                type="text"
                className={classes.input}
                name="firstName"
                placeholder="First Name"
                defaultValue={formData.firstName}
                ref={register}
                disabled={edit}
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
              Last Name
              <input
                type="text"
                className={classes.input}
                name="lastName"
                placeholder="Last Name"
                defaultValue={formData.lastName}
                disabled={edit}
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
              Email
              <input
                type="text"
                name="email"
                placeholder="example@email.com"
                defaultValue={formData.email}
                className={classes.input}
                ref={register}
                disabled={edit}
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
              Birthday
              <input
                type="text"
                name="birthDay"
                placeholder="mm/dd/yyyy"
                defaultValue={formData.birthDay}
                className={classes.input}
                ref={register}
                disabled={edit}
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
              Phone Number
              <input
                type="tel"
                name="phoneNumber"
                placeholder="xxx-xxx-xxx"
                max={12}
                defaultValue={formData.phoneNumber}
                className={classes.input}
                ref={register}
                disabled={edit}
                onChange={(e) => handleChange(e)}
              />
              {errors.phoneNumber && (
                <small className={classes.err}>{errors.phoneNumber.message}</small>
              )}
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <button
            type="submit"
            data-testid="edit-submit"
            onClick={() => handleClick()}
            className={classes.btn}
          >
            {edit ? 'EDIT' : 'SUBMIT'}
          </button>
        </Grid>
        {!edit && (
          <Grid item xs={12} md={12}>
            <button
              data-testid="cancelButton"
              type="button"
              onClick={() => cancelClick()}
              className={classes.btn}
            >
              CANCEL
            </button>
          </Grid>
        )}
      </form>
      <ChangePass />
    </div>
  );
};

ProfileInfo.propTypes = {
  userInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthDay: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
};

export default ProfileInfo;
