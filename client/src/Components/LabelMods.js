import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  label: yup.string().required('Label is Required'),
});

const useStyles = makeStyles({
  field: {
    margin: 10,
  },
  item: {
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '0.3em',
    marginBottom: 10,
    width: '130%',
    border: '0.0625em solid gray',
    padding: '0.625em 0.9375em',
    fontSize: '12px',
    '&:disabled': {
      opacity: '40%',
    },
  },
  btn: {
    background: '#000000',
    justifyContent: 'center',
    display: 'block',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    width: '18%',
    padding: '0.625em 0.9375em',
    marginLeft: 45,
    borderRadius: '0.3em',
    fontSize: '12px',
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
});

const LabelMods = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, reset, errors } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: editSchema,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (data, e) => {
    setFormData(data);
    console.log(formData);
    e.target.reset();
  };

  return (
    <div data-testid="newServiceInfo">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} md={12} container justify="center">
            <div className={classes.field}>
              <label htmlFor="label">
                {' '}
                Label
                <input
                  data-testid="input-label"
                  type="text"
                  className={classes.item}
                  name="label"
                  placeholder="Label"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.label && (
                  <small className={classes.err}>{errors.label.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12} container justify="center">
            <input type="submit" data-testid="add-submit" className={classes.btn} />
          </Grid>
        </form>
      </div>
    </div>
  );
};
export default LabelMods;
