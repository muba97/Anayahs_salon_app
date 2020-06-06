import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Require'),
  email: yup.string().email('Valid email is required').required(),
  birthDay: yup.string().required('date of birth is required'),
  phoneNumber: yup.number('Must be a number').required('Phone number is required'),
});

const useStyles = makeStyles({
  input: {
    margin: 10,
  },
});

const ProfileInfo = ({ userInfo }) => {
  const { firstName, lastName, email, birthDay, phoneNumber } = userInfo;
  const [formData, setFormData] = useState(userInfo);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: editSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log('final form: ', formData);
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.input}>
          <label> First Name </label>
          <input
            type="text"
            name="firstName"
            ref={register}
            defaultValue={formData.firstName}
            onChange={(e) => handleChange(e)}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div className={classes.input}>
          <label> Last Name </label>
          <input
            type="text"
            name="lastName"
            ref={register}
            defaultValue={formData.lastName}
            onChange={(e) => handleChange(e)}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div className={classes.input}>
          <label> Email </label>
          <input
            type="text"
            name="email"
            ref={register}
            defaultValue={formData.email}
            onChange={(e) => handleChange(e)}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={classes.input}>
          <label> Birthday </label>
          <input
            type="text"
            name="birthDay"
            ref={register}
            defaultValue={formData.birthDay}
            onChange={(e) => handleChange(e)}
          />
          {errors.birthDay && <p>{errors.birthDay.message}</p>}
        </div>
        <div className={classes.input}>
          <label> Phone </label>
          <input
            type="text"
            name="phoneNumber"
            ref={register}
            defaultValue={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </div>
        <input type="submit" />
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
