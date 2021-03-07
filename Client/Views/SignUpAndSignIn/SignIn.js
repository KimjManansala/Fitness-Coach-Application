import React from 'react';
import { useDispatch } from 'react-redux';
import { handleSignInSignUpAPI } from '../../Actions/SignInSignUp.js';

function SignIn() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSignInSignUp = () => {
    dispatch(handleSignInSignUpAPI());
  }

  return (
      <button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSignInSignUp}
      >
        LOGINTO GOOGLE TEST
      </button>
  );
}

export default SignIn