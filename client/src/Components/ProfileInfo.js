import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Required'),
  email: yup.string().email('Valid email is required').required(),
  birthDay: yup.string().required('date of birth is required'),
  phoneNumber: yup.number('Must be a number').required('Phone number is required'),
});

const useStyles = makeStyles({
  field: {
    margin: 10,
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: '10px',
    fontFamily: 'adobe-garamond-pro',
    fontSize: '14px',
    '&:disabled': {
      opacity: '40%'
    },
  },
  btn: {
    background: '#000000',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 40,
    padding: '0 30px',
    width: '100%',
    margin: '10',
    marginBottom: '5px',
    '&:disabled': {
      opacity: '40%'
    },
  },
});

const ProfileInfo = ({ userInfo }) => {
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
    if(edit !== false){
      console.log(JSON.stringify(data));
      
      console.log('userInfo: ', userInfo);
      console.log('formData: ', formData);
    }
  };

  const cancelClick = () => {
    setEdit(true);
    reset({});
  };

  const handleClick = () => {
    setEdit(!edit)
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label> First Name </label><br/>
          <input
            type="text"
            className={classes.input}
            name="firstName"
            value={formData.firstName}
            ref={register({minLength: 5})}
            disabled={edit}
            onChange={(e) => handleChange(e)}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div className={classes.field}>
          <label> Last Name </label><br/>
          <input
            type="text"
            className = {classes.input}
            name="lastName"
            disabled={edit}
            ref={register}
            onChange={(e) => handleChange(e)}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div className={classes.field}>
          <label> Email </label><br/>
          <input
            type="text"
            name="email"
            className = {classes.input}
            ref={register}
            disabled={edit}
            onChange={(e) => handleChange(e)}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={classes.field}>
          <label> Birthday </label><br/>
          <input
            type="text"
            name="birthDay"
            className={classes.input}
            ref={register}
            disabled={edit}
            onChange={(e) => handleChange(e)}
          />
          {errors.birthDay && <p>{errors.birthDay.message}</p>}
        </div>
        <div className={classes.field}>
          <label> Phone </label><br/>
          <input
            type="text"
            name="phoneNumber"
            className={classes.input}
            ref={register}
            disabled={edit}
            onChange={(e) => handleChange(e)}
          />
          {errors.phoneNumber && <p>Please enter a correct Phone Number</p>}
        </div>
        <button 
          disabled={errors.firstName || errors.lastName || errors.email  || errors.birthDay || errors.phoneNumber}
          onClick={() => handleClick()}
          className={classes.btn}
        >
          {edit ? 'EDIT': 'SUBMIT'}
        </button>
        {!edit && <button onClick={() => cancelClick()} className={classes.btn}>CANCEL</button>}
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
