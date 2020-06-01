import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Date from './Date/Date';
import Offer from './Offer/Offer';
// import Barcode from './Barcode/Barcode';
import MerchantSurvey from './Survey/Survey';
import ReceiptInfoBox from '../ReceiptInfoBox';

import merchant_logo from '../../../assets/Images/target-logo.svg';

// import { formatDate } from '../../../Tools';

const SingleReceipt = ({ singleReceipt, match }) => {
      return (
         <Grid container direction="column" alignItems="center">
         <Paper className="module infobox" style={{marginTop: "4em", maxWidth: "50%"}} elevation={4}>
            <Grid item container direction="column">
            <Grid item justify="center">
               <img src={merchant_logo} style={{height: "12em"}} alt="logo" />
               {/* <h1>{type}</h1> */}
               <div className="store-details">
                  <p> EVERETT - 617-420-0000</p>
               </div>
            </Grid>

            <ReceiptInfoBox {...singleReceipt} />
            
            {/* <Barcode 
               value={this.state.value}
               width={this.state.width}
               height={this.state.height}
               format={this.state.format}
               displayValue={this.state.displayValue}
               fontOptions={this.state.fontOptions}
               font={this.state.font}
               textAlign={this.state.center}
               textPosition={this.state.textPosition}
               textMargin={this.state.textMargin}
               fontSize={this.state.fontSize}
               background={this.state.background}
               lineColor={this.state.lineColor}
               margin={this.state.margin}
               marginTop={this.state.marginTop}
               marginBottom={this.state.marginBottom}
               marginLeft={this.state.marginLeft}
               marginRight={this.state.marginRight}
            /> */}
           
            <hr className="divider"></hr>
            <Offer />
            <hr className="divider"></hr>
            {/* <img src={merchant_logo} className="App-logo" alt="logo" />
            <div className="store-details">
                  <p>{merchant_address} - {merchant_phone}</p>
            </div> */}
            <Date />
            <hr className="divider"></hr>  
            <div className="surveyjs">
               <MerchantSurvey />
            </div>
            </Grid>
      </Paper>
      </Grid>
      )
};



const mapStateToProps = (state, ownProps) => {
   const { transId } = ownProps

   return {
      singleReceipt: state.receipts.data.find(el => el._id === transId)
   };
};

export default connect(mapStateToProps)(SingleReceipt);
