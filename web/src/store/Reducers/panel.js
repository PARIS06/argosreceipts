import * as actionTypes from '../Actions/actionTypes';

const initialState = {
   initialDataStatus: true
};

const panel = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_INITIAL_DATA_STATUS:
         return {
            ...state,
            initialDataStatus: action.status
         };

      default:
         return state;
   }
};

export default panel;
