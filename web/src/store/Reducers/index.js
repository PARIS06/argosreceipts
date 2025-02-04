import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import user_type from './userType'
// import accounts from './accounts';
import panel from './panel';
import cards from './cards';
// import messages from './messages';
import profile from './profile';
import receipts from './receipts';

export default history =>
   combineReducers({
      router: connectRouter(history),
      auth,
      user_type,
      // accounts,
      panel,
      cards,
      // messages,
      profile,
      receipts
   });
