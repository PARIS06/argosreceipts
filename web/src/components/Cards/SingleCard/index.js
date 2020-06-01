import React from 'react';
import { connect } from 'react-redux';
import CardInfobox from '../CardInfoBox';

const SingleCard = ({ singleCard, match }) => {
   return (
      <div className="row" style={{marginTop: "6em"}}>
         <div className="col">
            <CardInfobox {...singleCard} currentUrl={match.url} />
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const {cardId} = ownProps

   return {
      singleCard: state.cards.data.find(el => el._id === cardId)
   };
};

export default connect(mapStateToProps)(SingleCard);
