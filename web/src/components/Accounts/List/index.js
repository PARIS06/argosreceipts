import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
import AccountsListEl from '../ListElement';

// import { accounts } from '../../../utils/Dummydata';

const AccountsList = ({ accounts }) => {
   // Prepare accounts list
   const accountsList = accounts.map(acc => (
      <AccountsListEl accounts={accounts}  key={acc.id} {...acc}/>
   ));

   return (
      <Fragment>
         <h1>Accounts</h1>

         <p>You have
              {accountsList.length} 
              accounts</p>
         <div className="list-group">
             {accountsList}
             </div>
      </Fragment>
   );
};

export default AccountsList;

// const mapStateToProps = state => {
//    return {
//       accounts: state.accounts.data
//    };
// };

// export default connect(mapStateToProps)(AccountsList);
