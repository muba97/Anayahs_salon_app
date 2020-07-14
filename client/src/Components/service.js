import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const useStyle = makeStyles({
  field: {
    margin: 10,
  },
  p: {
    textAlign: 'right',
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 20,
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
    borderLeft: '1px solid',
    borderRight: '1px solid',
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
const Services = ({ serviceInfo }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {}
  console.log('Hello World')


  const classes = useStyle();
  return (
    <div data-testid="serviceInfo">
      <div
        tabIndex={0}
        className={classes.field}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        className={classes.btn}
      >
        <div className={classes.field}>
          <p className={classes.field}>{serviceInfo}</p>
        </div>
        <div className ={classes.field}>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
