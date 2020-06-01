import * as actionTypes from '../Actions/actionTypes';


const initialState = {
    status: true
 };
 
 const user_type = (state = initialState, action) => {
    switch (action.type) {
       case actionTypes.SET_USER_TYPE:
          return {
             ...state,
             status: action.status
          };
 
       default:
          return state;
    }
 };
 
 export default user_type;
 