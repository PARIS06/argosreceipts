import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/Actions';
import withAuth from '../../hoc/WithAuth';

import { isValidToken } from '../../utils/tools';

// import Loader from '../../components/UI/Loader';

import Navigation from '../../containers/Navigation';
import PanelIntro from '../Panel/Intro';
import PageNotFound from '../../components/PageNotFound';

import Accounts from '../../containers/Accounts';
import Receipts from '../../containers/Receipts';
import Cards from '../../containers/Cards';
import Profile from '../../containers/Profile';
import ProfileChangeDetails from '../../containers/Profile/ChangeDetails';


// import { card } from '../../utils/Dummydata'; 


// Get all user's initial data or redirect back to /login if not logged in
// This is all handled in withAuth HOC
class Panel extends Component {
   componentDidMount() {
      isValidToken()
         .then(() => {
            this.props.setAuthStatus(true);
            // this.props.fetchInitialData();
         })
         .catch(() => {
            this.props.setAuthStatus(false);
         });
   }

   render() {
    //   if (!this.props.initialDataStatus) {
    //      return <Loader />;
    //   } else {
         return (
            <Fragment>
               <Route path="/panel" component={Navigation} />

               <Switch>
                  <Route exact path="/panel" component={PanelIntro} />
                  <Route path="/panel/accounts" component={Accounts} />
                  <Route path="/panel/receipts" component={Receipts} />
                  <Route path="/panel/cards" component={Cards} />
                  <Route path="/panel/profile" component={Profile} />
                  <Route path="/panel/change-details" component={ProfileChangeDetails} />
                  <Route component={PageNotFound} />
               </Switch>
            </Fragment>
         );
   }
}


const mapStateToProps = state => {
   return {
      initialDataStatus: state.panel.initialDataStatus
   };
};

const mapDispatchToProps = dispatch => {
   return {
      setAuthStatus: status => dispatch(actions.setAuthStatus(status)),
      // fetchInitialData: () => dispatch(actions.fetchInitialData())
   };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAuth(Panel)));
