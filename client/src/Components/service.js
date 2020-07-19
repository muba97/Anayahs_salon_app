import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ServiceItems from './items';

const useStyle = makeStyles({
  field: {
    margin: 10,
  },
  smallBtn: {
    background: '#000000',
    justifyContent: 'center',
    display: 'flex',
    borderLeft: '5px solid',
    borderRight: '5px solid',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    height: 40,
    width: '15%',
    padding: '5px 8px',
    marginBottom: 2,
    fontSize: '13px',
    float: 'right',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
  btn: {
    justifyContent: 'space-between',
    display: 'flex',
    background: '#000000',
    borderRadius: '4px',
    borderLeft: '5px solid',
    borderRight: '5px solid',
    marginBottom: 5,
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: '13px',
    width: '100%',
    padding: '10px 15px 10px 15px',
    '&:disabled': {
      opacity: '40%',
    },
    '&:hover': {
      opacity: '70%',
    },
  },
});
const Services = ({ serviceLabels, items, newService }) => {
  const [open, setOpen] = useState(false);

  console.log(serviceLabels)

  const toggle = () => setOpen(!open);
  const classes = useStyle();
  return (
    <div data-testid="serviceInfo">
      {newService && (
        <Link to="/newservice">
          <button className={classes.smallBtn} type="button">
            ADD NEW SERVICE
          </button>
        </Link>
      )}
      <button className={classes.btn} type="button" onClick={() => toggle()}>
        <div className={classes.field}>
          <p className={classes.field}> {JSON.stringify(serviceLabels)} </p>
        </div>
        <div className={classes.field}>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </button>
      {open && (
        <ul className={classes.field}>
          {items.map((item) => (
            <div data-testid="services" className={classes.root} key={item.id}>
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
  items: PropTypes.shape([
    {
      id: PropTypes.number,
      title: PropTypes.string,
      time: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      label: PropTypes.string,
    },
  ]).isRequired,
};

export default Services;
