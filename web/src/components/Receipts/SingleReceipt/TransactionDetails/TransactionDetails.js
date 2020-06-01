import React from 'react'
import PropTypes from 'prop-types';

import './style.scss';



const TransactionDetails = ({ 
    item_name,
    item_number,
    item_category,
    tax_amount,
    sub_total,
    total})  =>  {
        return (
            <section>
                <div >
                    <div>
                    <span>Card number</span>
                    <p className="big">{total}</p>
                    </div>
                </div>
                <div>
                    <div>
                    <span>Card holder</span>
                        <p>{tax_amount} {sub_total}</p>
                    </div>
                    <div>
                    <span>Expiration date</span>
                    <p>
                        {item_name} / {item_number}
                    </p>
                    </div>
                </div>
            </section>
            // <div>
            //     <p className="category-title">{itemCategory}</p>
            //     <div className="item-details">
            //         <p className="spacing-transaction">{itemNumber}</p>
            //         <p className="spacing-transaction-name">{itemName}</p>
            //         <p>{itemSubtotal}</p>
            //     </div>
            //     <div className="item-details">
            //         <div className="space-holder">----------------</div>
            //         <p className="subtotal-text">SUBTOTAL</p>
            //         <p className="spacing-transaction-name">{itemSubtotal}</p>
            //     </div>
            //     <div className="item-details">
            //         <p className="tax-text">{transactionTax}</p>
            //         <p className="spacing-transaction-name">{itemSubtotal}</p>
            //         <p className="spacing-transaction-name">{taxAmount}</p>
            //     </div>
            //     <div className="item-details">
            //         <div className="space-holder">----------------------</div>
            //         <p className="subtotal-text">TOTAL</p>
            //         <p className="spacing-transaction-name">{itemTotal}</p>
            //     </div>
             
            // </div>
            
            
        );
};

TransactionDetails.propTypes = {
    total: PropTypes.number,
    tax_amount: PropTypes.number,
    sub_total: PropTypes.number
 };

export default TransactionDetails;
