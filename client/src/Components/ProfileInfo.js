import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(25, 'At most 25 characters')
    .required('First Name is Required'),
  lastName: yup
    .string()
    .max(25, 'At most 25 characters')
    .required('Last Name is Required'),
  email: yup.string().email('Valid email is required').required('Email is Required'),
  birthDay: yup
    .string()
    .matches(
      /^(((0?[1-9]|1[012])\/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])\/(29|30)|(0?[13578]|1[02])\/31)\/(19|[2-9]\d)\d{2}|0?2\/29\/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$/,
      'Enter a valid DOB'
    )
    .required('Date of Birth is required'),
  phoneNumber: yup
    .string()
    .matches(
      /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/,
      'Enter Valid Phone Number'
    )
    .max(12, 'Must be 10 digits')
    .required('Phone Number is required'),
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
    width: '107.5%',
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
});

const ProfileInfo = ({ userInfo }) => {
  const [finalData, setFinalData] = useState(userInfo);
  const [formData, setFormData] = useState(userInfo);
  const [edit, setEdit] = useState(true);
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: editSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    if (edit !== false) {
      setFinalData(data);
      setFormData(data);
    }
  };

  const cancelClick = () => {
    setEdit(true);
    reset(finalData);
    if (finalData !== formData) {
      setFormData(finalData);
    }
  };

  const handleClick = () => {
    setEdit(!edit);
  };

  const classes = useStyles();

  return (
    <div data-testid="profileInfo">
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
        <div className={classes.field}>
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
        <div className={classes.field}>
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
        <div className={classes.field}>
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
        <div className={classes.field}>
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
        <button
          type="submit"
          data-testid="edit-submit"
          disabled={
            errors.firstName ||
            errors.lastName ||
            errors.email ||
            errors.birthDay ||
            errors.phoneNumber
          }
          onClick={() => handleClick()}
          className={classes.btn}
        >
          {edit ? 'EDIT' : 'SUBMIT'}
        </button>
        {!edit && (
          <button
            data-testid="cancelButton"
            type="button"
            onClick={() => cancelClick()}
            className={classes.btn}
          >
            CANCEL
          </button>
        )}
      </form>
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
