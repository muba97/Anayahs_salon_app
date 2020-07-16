import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import * as yup from 'yup';

const editSchema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  time: yup.string().required('Time is Required'),
  price: yup.string().required('Price is Required'),
  description: yup.string().required('Description is required'),
  label: yup.string().required('Label is required'),
});

const useStyle = makeStyles({
  field: {
    margin: 10,
  },
  item: {
    justifyContent: 'center',
    display: 'block',
    boxSizing: 'border-box',
    width: '50%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '7px 10px',
    marginBottom: 5,
    float: 'top',
    fontSize: '12px',
    '&:disabled': {
      opacity: '40%',
    },
  },
  smallBtn: {
    background: '#000000',
    justifyContent: 'center',
    float: 'right',
    display: 'flex',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    height: 40,
    width: '40%',
    padding: '8px 11px',
    marginBottom: 2,
    fontSize: '13px',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
  span: {
    textAlign: 'left',
    justifyContent: 'center',
    display: 'block',
    boxSizing: 'border-box',
    width: '90%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 10,
    fontSize: '12px',
    float: 'left',
    '&:disabled': {
      opacity: '40%',
    },
  },
});

const ServiceItems = ({ items }) => {
  const [initData, setInitData] = useState(items);
  const [serviceData, setServiceData] = useState(items);
  const [edit, setEdit] = useState(true);
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: editSchema,
  });
  const onSubmit = (data) => {
    if (edit !== false) {
      setInitData(data);
      setServiceData(data);
    }
  };
  const handleChange = (e) => {
    setServiceData({
      ...serviceData,
      [e.target.name]: e.target.value,
    });
  };
  const cancelClick = () => {
    setEdit(true);
    reset(initData);
    if (initData !== serviceData) {
      setServiceData(initData);
    }
  };

  const handleClick = () => {
    setEdit(!edit);
  };

  const classes = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.span}>
      <Grid item xs={10} md={10}>
        <div>
          <label htmlFor="title">
            {' '}
            Title
            <input
              data-testid="input-title"
              type="text"
              className={classes.item}
              name="firstName"
              placeholder="First Name"
              defaultValue={serviceData.title}
              ref={register}
              disabled={edit}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
      </Grid>
      <Grid item xs={10} md={10}>
        <div>
          <label htmlFor="time">
            {' '}
            Time
            <input
              data-testid="input-time"
              type="text"
              className={classes.item}
              name="time"
              placeholder="Time"
              defaultValue={serviceData.time}
              ref={register}
              disabled={edit}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
      </Grid>
      <Grid item xs={10} md={10}>
        <div>
          <label htmlFor="price">
            {' '}
            Price
            <input
              data-testid="input-price"
              type="text"
              className={classes.item}
              name="price"
              placeholder="Price"
              defaultValue={serviceData.price}
              ref={register}
              disabled={edit}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
      </Grid>
      <Grid item xs={10} md={10}>
        <div>
          <label htmlFor="description">
            {' '}
            Description
            <input
              data-testid="input-description"
              type="text"
              className={classes.item}
              name="description"
              placeholder="Description"
              defaultValue={serviceData.description}
              ref={register}
              disabled={edit}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
      </Grid>
      <Grid item xs={10} md={10}>
        <div>
          <label htmlFor="label">
            {' '}
            Label
            <input
              data-testid="input-label"
              type="text"
              className={classes.item}
              name="label"
              placeholder="Label"
              defaultValue={serviceData.label}
              ref={register}
              disabled={edit}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
      </Grid>
      <Grid item xs={7} md={7}>
        <button
          type="submit"
          data-testid="edit-submit"
          onClick={() => handleClick()}
          className={classes.smallBtn}
        >
          {edit ? 'EDIT' : 'SUBMIT'}
        </button>
      </Grid>
      {!edit && (
        <Grid item xs={7} md={7}>
          <button
            data-testid="cancelButton"
            type="button"
            onClick={() => cancelClick()}
            className={classes.smallBtn}
          >
            CANCEL
          </button>
        </Grid>
      )}
    </form>
  );
};

ServiceItems.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
    time: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};
export default ServiceItems;
