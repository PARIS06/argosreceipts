import React from 'react';
import PropTypes from 'prop-types';

import '../../Infobox/style.scss';
import './style.scss';

import CardLogos from '../CardLogos';
import CardDetails from '../CardDetails';
import AccountName from '../../Infobox/AccountName';
import AccountSummary from '../../Infobox/AccountSummary';

import MultiModuleButtons from '../../../components/UI/Buttons/MultiModuleButtons';
import SingleMultiButton from '../../../components/UI/Buttons/SingleMultiButton';

const CardInfobox = ({
   number,
   expiresMonth,
   expiresYear,
   firstName,
   lastName,
   // balance,
   // income7Days,
   // expenses7Days,
   currentUrl
}) => {
   return (
      <section className="module infobox card-infobox">
         <header>
            <CardLogos type="visa" />
            <CardDetails firstName={firstName} lastName={lastName} number={number} expiresMonth={expiresMonth} expiresYear={expiresYear} />
         </header>

         <AccountName />
         <AccountSummary balance={2000} income7Days={3500} expenses7Days={1500} />

         <MultiModuleButtons>
            <SingleMultiButton text="View Receipts" href={`${currentUrl}/view-receipts`} />
            <SingleMultiButton text="Change Pin" href={`${currentUrl}/change-pin`} />
         </MultiModuleButtons>
      </section>
   );
};

CardInfobox.propTypes = {
   number: PropTypes.number,
   expiresMonth: PropTypes.number,
   expiresYear: PropTypes.number,
   balance: PropTypes.number,
   income7Days: PropTypes.number,
   expenses7Days: PropTypes.number,
   currentUrl: PropTypes.string
};

export default CardInfobox;
