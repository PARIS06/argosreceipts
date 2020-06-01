import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { formatDate } from '../../../Tools';

import AmazonLogo from '../../../assets/Images/amazonlogo.png'

const ReceiptsListEl = ({ matchUrl, _id, type, total, reference }) => {
//    date = formatDate(date, 'dd/MM/yyyy HH:mm');
    return <Link to={`${matchUrl}/${_id}`}  className="list-group-item list-group-item-action">
                
                <div className="d-flex w-100 justify-content-between">
                    <div className="user-profile-box d-flex">
                        <img src={AmazonLogo} alt="User profile" />
                        <div className='justify-content-left'>
                        <h5 className="mb-1">{type}</h5>
                        <small className="text-muted">Reference: {reference}</small>
                    </div>
                    </div>           
                    <p><b>$</b> {total}</p>
                </div>  
            </Link>
};

ReceiptsListEl.propTypes = {
   matchUrl: PropTypes.string,
   _id: PropTypes.string,
   type: PropTypes.string,
   payeeName: PropTypes.string,
   date: PropTypes.string,
   total: PropTypes.number,
   status: PropTypes.string
};

export default ReceiptsListEl;
