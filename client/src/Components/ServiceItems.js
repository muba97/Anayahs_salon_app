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
  description: yup.string().required('Description is Required'),
  label: yup.string().required('Label is Required'),
});

const useStyle = makeStyles({
  field: {
    margin: 14,
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
const ServiceItems = ({ items }) => {
  const [initData, setInitData] = useState(items);
  const [serviceData, setServiceData] = useState(items);
  const [edit, setEdit] = useState(true);
  const [confirmDelete, setconfirmDelete] = useState(true);
  const [deleteToggle, setdeleteToggle] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: editSchema,
  });
  const toggle = () => setdeleteToggle(!deleteToggle);
  const handleRemove = () => {
    setconfirmDelete(false);
    setInitData(null);
    setServiceData(null);
  };
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
    if (emptyKeysObj(serviceData) || atLeastOneEmptyKey(serviceData)) {
      setEdit(false);
    } else {
      setEdit(!edit);
    }
  };

  const classes = useStyle();
  return (
    <div>
      {confirmDelete && (
        <div className={classes.span} data-testid="serviceItems">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={10} md={10}>
              <div className={classes.field}>
                <label htmlFor="title">
                  {' '}
                  Title
                  <input
                    type="text"
                    className={classes.item}
                    name="title"
                    placeholder="Title"
                    defaultValue={serviceData.title}
                    disabled={edit}
                    ref={register}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.title && (
                    <small className={classes.err}>{errors.title.message}</small>
                  )}
                </label>
              </div>
            </Grid>
            <Grid item xs={10} md={10}>
              <div className={classes.field}>
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
                  {errors.time && (
                    <small className={classes.err}>{errors.time.message}</small>
                  )}
                </label>
              </div>
            </Grid>
            <Grid item xs={10} md={10}>
              <div className={classes.field}>
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
                  {errors.price && (
                    <small className={classes.err}>{errors.price.message}</small>
                  )}
                </label>
              </div>
            </Grid>
            <Grid item xs={10} md={10}>
              <div className={classes.field}>
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
                  {errors.description && (
                    <small className={classes.err}>{errors.description.message}</small>
                  )}
                </label>
              </div>
            </Grid>
            <Grid item xs={10} md={10}>
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
                    defaultValue={serviceData.label}
                    ref={register}
                    disabled={edit}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.label && (
                    <small className={classes.err}>{errors.label.message}</small>
                  )}
                </label>
              </div>
            </Grid>
            {edit && (
              <Grid item xs={7} md={7}>
                <button
                  type="button"
                  data-testid="delete-cancel"
                  onClick={() => toggle()}
                  className={classes.smallBtn}
                >
                  {deleteToggle ? 'CANCEL' : 'DELETE'}
                </button>
              </Grid>
            )}
            {!deleteToggle && (
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
            )}
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
            {deleteToggle && (
              <Grid item xs={7} md={7}>
                <button
                  data-testid="deleteButton"
                  type="button"
                  onClick={() => handleRemove()}
                  className={classes.smallBtn}
                >
                  CONFIRM
                </button>
              </Grid>
            )}
          </form>
        </div>
      )}
    </div>
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
