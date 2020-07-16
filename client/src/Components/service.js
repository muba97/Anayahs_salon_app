import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import * as yup from 'yup';
import ServiceItems from './items';

const editSchema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  time: yup.string().required('Time is Required'),
  price: yup.string().required('Price is Required'),
  description: yup.string().required('Description is required'),
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
  err: {
    color: 'red',
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

  btn: {
    justifyContent: 'space-between',
    textAlign: 'left',
    display: 'flex',
    background: '#000000',
    borderRadius: '4px',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    marginBottom: 5,
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    width: '97%',
    padding: '10px 15px 10px 15px',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
});
const Services = ({ serviceLabels, items }) => {
  const [open, setOpen] = useState(false);
  const [initData, setInitData] = useState(items);
  const [serviceData, setServiceData] = useState(items);
  const [edit, setEdit] = useState(true);
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: editSchema,
  });
  const toggle = () => setOpen(!open);
  const handleData = (e) => {
    setServiceData(e);
    setInitData(e);
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
    setEdit(!edit);
  };

  // serviceData.map((item) => {
  //   console.log('-', item.id);
  // });

  const classes = useStyle();
  return (
    <div data-testid="serviceInfo">
      <button className={classes.btn} type="button" onClick={() => toggle()}>
        <div className={classes.field}>
          <p className={classes.field}>{serviceLabels}</p>
        </div>
        <div className={classes.field}>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </button>
      {open && (
        <ul className={classes.field}>
          {items.map((item) => (
            <div data-testid="services" className={classes.root}>
              <ServiceItems items={item} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
Services.propTypes = {
  serviceLabels: PropTypes.shape({
    labels: PropTypes.string,
  }).isRequired,
  items: PropTypes.shape({
    title: PropTypes.string,
    time: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default Services;
