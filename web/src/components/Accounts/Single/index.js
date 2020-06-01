import React from 'react';
import { chunker } from '../../../utils/Dummydata';

const SingleAccount = ({ type, sortcode, number, currency, balance }) => {
   return (
      <section className="module single-account">
         <h1>{type} account</h1>
         <ul>
            <li>Sortcode: 
                {chunker(sortcode, 2, '-')}
                </li>
            <li>Number: 
                {number}
            </li>
            <li>Currency: 
                {currency}
                </li>
            <li>
               Balance: 
               {balance} {currency}
            </li>
         </ul>
      </section>
   );
};

export default SingleAccount;

// const mapStateToProps = (state, ownProps) => {
//    const accId = ownProps.match.params.accId;

//    return {
//       singleAcc: state.accounts.data.find(el => el._id === accId)
//    };
// };

// export default connect(mapStateToProps)(SingleAccount);
