import React from 'react';
import PropTypes from 'prop-types';
import Date from '../SingleReceipt/Date/Date';

import '../../Infobox/style.scss';
// import './style.scss';



// import BrandLogos from '../CardLogos';
import TransactionDetails from '../SingleReceipt/TransactionDetails/TransactionDetails';


const ReceiptInfoBox = ({
   item_name,
   item_number,
   item_category,
   tax_amount,
   sub_total,
   total
}) => {
   return (
      <section>
         <header>
            <Date />
            <TransactionDetails  
                item_name={item_name} 
                item_number={item_number} 
                item_category={item_category}
                tax_amount={tax_amount}
                sub_total={sub_total}
                total={total} />

         </header>
         

      </section>
   );
};

ReceiptInfoBox.propTypes = {
   number: PropTypes.number,
   expiresMonth: PropTypes.number,
   expiresYear: PropTypes.number,
   balance: PropTypes.number,
   income7Days: PropTypes.number,
   expenses7Days: PropTypes.number,
   currentUrl: PropTypes.string
};

export default ReceiptInfoBox;