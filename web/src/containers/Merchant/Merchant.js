import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import * as Actions from '../../store/Actions';
// // import withAuth from '../../hoc/WithAuth';

// import { isValidToken } from '../../Tools';

import Dashboard from '../../components/Merchant/Dashboard';
import ReceiptBuilder from '../../components/Merchant/ReceiptBuilder/ReceiptBuilder';
import ReceiptTemplate from '../../components/Merchant/ReceiptBuilder/ReceiptTemplate/ReceiptTemplate';



// Get all user's initial data or redirect back to /login if not logged in
// This is all handled in withAuth HOC
class Merchant extends Component {
//    componentDidMount() {
//       isValidToken()
//          .then(() => {
//             this.props.setAuthStatus(true);
//             this.props.fetchInitialData();
//          })
//          .catch(() => {
//             this.props.setAuthStatus(false);
//          });
//    }

   render() {
    //   if (!this.props.initialDataStatus) {
    //      return <Loader />;
    //   } else {
         return (
            <Fragment>
               {/* <Route path="/panel" component={Navigation} /> */}

               <Switch>
                  <Route exact path="/merchants" component={Dashboard} />
                  <Route path="/merchants/receiptbuilder" component={ReceiptBuilder} />
                  <Route path="/merchants/create-receipt" component={ReceiptTemplate} />
                  
               </Switch>
            </Fragment>
         );
   }
}

export default Merchant;

// const mapStateToProps = state => {
//    return {
//       initialDataStatus: state.panel.initialDataStatus
//    };
// };

// const mapDispatchToProps = dispatch => {
//    return {
//       setAuthStatus: status => dispatch(Actions.setAuthStatus(status)),
//       fetchInitialData: () => dispatch(Actions.fetchInitialData())
//    };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Panel));
