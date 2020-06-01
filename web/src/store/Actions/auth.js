import { updateAPIConfig } from '../../api/base';
import { loginUser, registerUser } from '../../api/auth';
import * as actionTypes from './actionTypes';

// Tools
import { setAuthToken } from '../../utils/tools';

export const setAuthStatus = (status, email = null) => ({
   type: actionTypes.SET_AUTH_STATUS,
   status,
   email
});

export const setUserType = (status, email = null) => ({
   type: actionTypes.SET_USER_TYPE,
   status,
   email
});

// Login
export const login = data => async dispatch => {
   try {
      const token = await loginUser(data);
      console.log(token.token);
      if (!token) {
         dispatch(setAuthStatus(false));
         return;
      }

      // if (token.user_type === 1) {
      //    dispatch(setUserType(false));
      // }

      setAuthToken(token);
      updateAPIConfig({ authToken: token });
      dispatch(setAuthStatus(true));
   } catch (err) {
      dispatch(setAuthStatus(false));
   }
};

// Register
export const register = data => async dispatch => {
   try {
      const user = await registerUser(data);
      if (!user) {
         dispatch(setAuthStatus(false));
         return;
      }

      if (user.user_type === 1) {
         dispatch(setUserType(false));
      }

      dispatch(setAuthStatus(true));
   } catch (err) {
      dispatch(setAuthStatus(false));
   }
};
