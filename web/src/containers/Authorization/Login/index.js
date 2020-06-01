import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/Actions';
import withAuth from '../../../hoc/WithAuth';

import LoginModal from '../../../components/Authorization/Modal/Modal';

class Login extends Component {
   state = {
      loading: false,
      error: null
   };

   render() {
      return (
         <div className="row">
            <div className="col">
               <LoginModal
                  history={this.props.history}
                  onLoginSubmit={this.onLoginSubmit}
                  onRegisterSubmit={this.onRegisterSubmit}
                  loading={this.state.loading}
                  error={this.state.error}
               />
            </div>
         </div>
      );
   }

   onLoginSubmit = (email, password) => {
      this.setState({ loading: true, error: null });

      // Dispatch auth action
      // There will be automatic redirect to panel, in HOC
      this.props
         .login({ email, password })
         .catch(error => this.setState({ loading: false, error }));
   };

   onRegisterSubmit = (email, password, user_type, companyName) => {
      this.setState({ loading: true, error: null });

      // Dispatch auth action
      // There will be automatic redirect to panel, in HOC
      this.props
         .register({ email, password, user_type, companyName })
         .catch(error => this.setState({ loading: false, error }));
   };
}



const mapDispatchToProps = dispatch => {
   return {
      login: data => dispatch(actions.login(data)),
      register: (email,password, user_type, companyName) => dispatch(actions.register(email, password, user_type, companyName))
   }
}

export default connect(null, mapDispatchToProps)(Login);
