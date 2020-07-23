import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import LabelMods from './LabelMods';

const editSchema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  time: yup.string().required('Time is Required'),
  price: yup.string().required('Price is Required'),
  description: yup.string().required('Description is Required'),
  label: yup.string().required('Label is Required'),
});

const useStyles = makeStyles({
  field: {
    margin: 10,
  },
  toggle: {
    justify: 'center',
    display: 'solid',
    background: '#000000',
    borderRadius: '4px',
    marginLeft: 8,
    marginBottom: 5,
    color: 'white',
    backgroundColor: 'black',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: '15px',
    width: '49%',
    padding: '10px 15px 10px 15px',
    float: 'center',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
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

const NewService = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState([]);
  const [labelOpen, setlabelOpen] = useState(false);
  const [itemOpen, setitemOpen] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
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
    reset(e);
    console.log(formData);
  };

  const labelToggle = () => {
    if (itemOpen === true) {
      setitemOpen(!itemOpen);
      setlabelOpen(!labelOpen);
    } else {
      setlabelOpen(!labelOpen);
    }
  };
  const itemToggle = () => {
    if (labelOpen === true) {
      setitemOpen(!itemOpen);
      setlabelOpen(!labelOpen);
    } else {
      setitemOpen(!itemOpen);
    }
  };
  return (
    <div data-testid="newServiceInfo">
      <button
        type="button"
        className={classes.toggle}
        onClick={() => labelToggle()}
        data-testid="labelButton"
      >
        Add new labels
      </button>
      <button
        type="button"
        data-testid="itemButton"
        className={classes.toggle}
        onClick={() => itemToggle()}
      >
        Add new items
      </button>
      {labelOpen && (
        <div>
          <LabelMods />
        </div>
      )}
      {itemOpen && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} md={12} container justify="center">
            <div className={classes.field}>
              <label htmlFor="title">
                {' '}
                Title *
                <input
                  type="text"
                  className={classes.item}
                  name="title"
                  placeholder="Title"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.title && (
                  <small className={classes.err}>{errors.title.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12} container justify="center">
            <div className={classes.field}>
              <label htmlFor="time">
                {' '}
                Time *
                <input
                  data-testid="input-time"
                  type="text"
                  className={classes.item}
                  name="time"
                  placeholder="Time"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.time && (
                  <small className={classes.err}>{errors.time.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12} container justify="center">
            <div className={classes.field}>
              <label htmlFor="price">
                {' '}
                Price *
                <input
                  data-testid="input-price"
                  type="text"
                  className={classes.item}
                  name="price"
                  placeholder="Price"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.price && (
                  <small className={classes.err}>{errors.price.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12} container justify="center">
            <div className={classes.field}>
              <label htmlFor="description">
                {' '}
                Description *
                <input
                  data-testid="input-description"
                  type="text"
                  className={classes.item}
                  name="description"
                  placeholder="Description"
                  ref={register}
                  onChange={(e) => handleChange(e)}
                />
                {errors.description && (
                  <small className={classes.err}>{errors.description.message}</small>
                )}
              </label>
            </div>
          </Grid>
          <Grid item xs={12} md={12} container justify="center">
            <div className={classes.field}>
              <label htmlFor="label">
                {' '}
                Label *
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
      )}
    </div>
  );
};

export default NewService;
