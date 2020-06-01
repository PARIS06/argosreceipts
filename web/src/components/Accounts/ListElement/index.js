import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { chunker } from '../../../utils/Dummydata';

const AccountsListEl = ({ accounts }) => {
   const accountsListEl = accounts.map((accounts, i) => {
      return  <Link className="list-group-item list-group-item-action">
               <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{accounts[i].type} account</h5>
                  <small className="text-muted">Active</small>
               </div>
               <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                  blandit.
               </p>
               <small className="text-muted">
                  Sortcode: {chunker(accounts[i].sortcode, 2, '-')}, currency: {accounts[i].currency}, balance: {accounts[i].balance}{' '}
                  {accounts[i].currency}
               </small>
            </Link>
   });

   return (
      <div>
          {accountsListEl}
      </div>
 );
   
};

AccountsListEl.propTypes = {
   _id: PropTypes.string,
   type: PropTypes.string,
   sortcode: PropTypes.number,
   currency: PropTypes.string,
   balance: PropTypes.number
};

export default AccountsListEl;
