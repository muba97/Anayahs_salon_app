import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles({
  field: {
    margin: 10,
  },
  item: {
    width: '85%',
    display: 'block',
    fontSize: '15px',
    boxSizing: 'border-box',
    borderRadius: '1px',
    border: '1px solid black',
    padding: '8px 11px',
    marginBottom: 3,
    float: 'left',
    '&:disabled': {
      opacity: '40%',
    },
  },
  smallBtn: {
    justifyContent: 'center',
    display: 'flex',
    background: '#000000',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    width: '15%',
    padding: '20px 25px 20px 25px',
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
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
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
  const [serviceData, setServiceData] = useState(items);
  const [edit, setEdit] = useState([]);
  const [show, setShow] = useState([]);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  const handleClick = (service) => {
    toggle(!open);
  };
  console.log(items)

  const classes = useStyle();
  return (
    <div data-testid="serviceInfo">
      <div className={classes.btn} onClick={() => toggle(!open)}>
        <div className={classes.field}>
          <p className={classes.field}>{serviceLabels}</p>
        </div>
        <div className={classes.field}>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className={classes.field}>
          {items.map((item) => (
            <li className={classes.span} key={item.id}>
              <span className={classes.item}>Service: {item.title}</span>
              <span className={classes.item}>Service length: {item.time}</span>
              <span className={classes.item}>Price: ${item.price}</span>
              <span className={classes.item}>Description: {item.description}</span>
              <button className={classes.smallBtn} type="button">
                edit
              </button>
            </li>
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
