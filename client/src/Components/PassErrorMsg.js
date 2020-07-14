import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  err: {
    color: 'red',
    marginBottom: '0.3125em',
  },
});

const PassErrorMsg = ({ message }) => {
  const classes = useStyles();
  const messageCheck =
    message ===
    'Minimum 7 characters, At least one upper case, one lower case, one number, and one special character';
  return (
    <div>
      {messageCheck ? (
        <div>
          <small className={classes.err}>- Minimum 7 Characters</small>
          <br />
          <small className={classes.err}>- At least one upper case</small>
          <br />
          <small className={classes.err}>- At least one lower case</small>
          <br />
          <small className={classes.err}>- At least one number</small>
          <br />
          <small className={classes.err}>- At least one special character</small>
        </div>
      ) : (
        <small className={classes.err}>{message}</small>
      )}
    </div>
  );
};

export default PassErrorMsg;
