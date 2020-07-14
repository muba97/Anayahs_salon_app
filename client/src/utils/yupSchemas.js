import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is Required')
    .max(25, 'At most 25 characters'),
  lastName: yup
    .string()
    .required('Last Name is Required')
    .max(25, 'At most 25 characters'),
  email: yup.string().email('Enter a valid email').required('Email is Required'),
  birthDay: yup
    .string()
    .required('Date of Birth is required')
    .matches(
      /^(((0?[1-9]|1[012])\/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])\/(29|30)|(0?[13578]|1[02])\/31)\/(19|[2-9]\d)\d{2}|0?2\/29\/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$/,
      'Enter a valid DOB'
    ),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(
      /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/,
      'Enter Valid Phone Number'
    )
    .max(12, 'Must be 10 digits'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
      'Minimum 7 characters, At least one upper case, one lower case, one number, and one special character'
    ),

  confirmPassword: yup
    .string()
    .required('Confirm Password Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

export const profileSchema = yup.object().shape({
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
    .required('Date of Birth is required')
    .matches(
      /^(((0?[1-9]|1[012])\/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])\/(29|30)|(0?[13578]|1[02])\/31)\/(19|[2-9]\d)\d{2}|0?2\/29\/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$/,
      'Enter a valid DOB'
    ),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(
      /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/,
      'Enter Valid Phone Number'
    )
    .max(12, 'Must be 10 digits'),
});
