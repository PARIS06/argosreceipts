import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const AccountSummary = props => {
   return (
      <section className="account-summary">
         <section className="account-summary-boxes">
            <div>
               <span>Credits</span>
               <strong>$ {props.income7Days}</strong>
            </div>
            <div>
               <span>Debits</span>
               <strong>$ {props.expenses7Days}</strong>
            </div>
         </section>

         <section className="account-summary-total">
            <span>Balance</span>
            <strong>$ {props.balance}</strong>
         </section>
      </section>
   );
};

AccountSummary.propTypes = {
   income7Days: PropTypes.number,
   expenses7Days: PropTypes.number,
   balance: PropTypes.number
};

export default AccountSummary;
