import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as actions from '../../store/Actions';

import { updateAPIConfig } from '../../api/base';
import { isValidToken } from '../../utils/tools';

import withAuth from '../../hoc/WithAuth/index';

import Loader from '../UI/Loader';

import Layout from '../../hoc/Layout';

import Home from '../../containers/Home';
import Panel from '../../containers/Panel';

// import Login from '../../containers/Authorization/Login';
// import Register from '../../containers/Authorization/Register';
import Logout from '../../components/Authorization/Logout/';
import PageNotFound from '../PageNotFound';


// import { card } from '../../utils/Dummydata'; 

import './app.scss';

import Merchant from '../../containers/Merchant/Merchant';



// Get all user's initial data or redirect back to /login if not logged in
// This is all handled in withAuth HOC
class App extends Component {
   componentDidMount() {
      isValidToken()
         .then(token => {
            updateAPIConfig({ authToken: token });
            this.props.setAuthStatus(true);
         })
         .catch(() => {
            this.props.setAuthStatus(false);
         });
   }

   render() {
         return (
               <Layout>
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/panel" component={Panel} />
                     <Route path="/merchants" component={Merchant} />
                     <Route path="/logout" component={Logout} /> 
                     <Route component={PageNotFound} />
                  </Switch>
               </Layout> 
           
         );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setAuthStatus: status => dispatch(actions.setAuthStatus(status)),
      setUserType: status => dispatch(actions.setUserType(status))
   };
};

export default withRouter(connect(null, mapDispatchToProps)(withAuth(App)));
