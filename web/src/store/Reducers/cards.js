import * as actionTypes from '../Actions/actionTypes';
import { bankCards } from '../../utils/Dummydata';

const initialState = {
   data: bankCards,
   status: true
};

const cards = (state = initialState, action) => {

   switch (action.type) {
      case actionTypes.FETCH_CARDS:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_CARDS_STATUS:
         return {
            ...state,
            status: action.status
         };

      default:
         return state;
   }
};

export default cards;
