import * as yup from 'yup';

const inputSchema = yup.object().shape({
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

export default inputSchema;
