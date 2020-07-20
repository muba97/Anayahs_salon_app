import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ServiceItems from './ServiceItems';

const useStyle = makeStyles({
  field: {
    margin: 10,
  },
  smallBtn: {
    background: '#000000',
    justifyContent: 'center',
    display: 'flex',
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

  const toggle = () => setOpen(!open);
  const classes = useStyle();
  return (
    <div data-testid="serviceInfo">
      {newService && (
        <Link to="/newservice">
          <button
            className={classes.smallBtn}
            type="button"
            data-testid="newServiceButton"
          >
            ADD NEW SERVICE
          </button>
        </Link>
      )}
      <button
        className={classes.btn}
        type="button"
        onClick={() => toggle()}
        data-testid="openButton"
      >
        <div className={classes.field}>
          <p className={classes.field}> {serviceLabels} </p>
        </div>
        <div className={classes.field}>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </button>
      {open && (
        <ul className={classes.field}>
          {items.map((item) => (
            <div
              data-testid="serviceItems"
              className={classes.root}
              key={items.toString()}
            >
              <ServiceItems items={item} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

Services.propTypes = {
  serviceLabels: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  newService: PropTypes.bool.isRequired,
};

export default Services;
