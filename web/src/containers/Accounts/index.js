import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountsList from '../../components/Accounts/List';
import SingleAccount from '../../components/Accounts/Single';

import { accounts } from '../../utils/Dummydata';

class Accounts extends Component {
   state = {
      accounts: accounts
   }

   render () {

      // const queryParams = [];
      // for (let i in this.state.accounts) {
      //    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.accounts[i]))
      // }

      // const queryString = queryParams.join('&');
      // this.props.history.push({
      //    pathname: '/panel/accounts/:id',
      //    search: '?' + queryString
      // })



      return (
         <div className="row panel-content">
         <div className="col">
            <Switch>
               <Route exact path="/panel/accounts"  render={(props) =>  <AccountsList {...props} receipts={this.state.accounts} />} />
               <Route path= "/panel/accounts/:accId"component={SingleAccount} />
            </Switch>
         </div>
      </div>
      )
   }
} 

export default Accounts;
