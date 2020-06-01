import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ReceiptsList from '../../components/Receipts/ReceiptsList';
import SingleReceipt from '../../components/Receipts/SingleReceipt';
import NewExport from '../../components/Receipts/New';

// import { receipts } from '../../utils/Dummydata';

const Receipts = props => (
    <div className="row panel-content">
                <div className="col">
                <Switch>
                    <Route exact path="/panel/receipts" component={ReceiptsList} />
                    <Route path="/panel/transfers/new" component={NewExport} />
                    <Route path="/panel/receipts/:receipt_number" component={SingleReceipt} />
                </Switch>
                </div>
            </div>

); 

export default Receipts;
