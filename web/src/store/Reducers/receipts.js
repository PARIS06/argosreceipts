import * as actionTypes from '../Actions/actionTypes';
import { merchantReceipts } from '../../utils/Dummydata';

const initialState = {
   data: merchantReceipts,
   status: true
};

const receipts = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_RECEIPTS:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_RECEIPTS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.EXPORT_RECEIPT:
         return {
            ...state,
            data: [...state.data, ...action.data]
         };

      default:
         return state;
   }
};

export default receipts;
