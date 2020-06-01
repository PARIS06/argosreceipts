import _ from 'lodash';
import { getMyCards } from 'api/cards';
import * as actionTypes from './actionTypes';

// Get all user's cards
export const fetchCards = () => async dispatch => {
   try {
      const data = await getMyCards();

      if (!data) {
         dispatch(fetchCardsStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_CARDS, data });
   } catch (err) {
      dispatch(fetchCardsStatus(false));
   }
};

export const fetchCardsStatus = status => ({
   type: actionTypes.FETCH_CARDS_STATUS,
   status
});


