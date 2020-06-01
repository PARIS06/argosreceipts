import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Handle redirects for /login, /register and /panel
const withAuth = WrappedComponent => {
   return class extends Component {
      componentDidMount() {
         this.shouldRedirect(this.props);
      }

      shouldComponentUpdate(nextProps) {
         this.shouldRedirect(nextProps);

         return true;
      }

      shouldRedirect(props) {
         const path = props.location.pathname;
         

         // If we are on login/register and auth is complete, redirect to /panel
         // Otherwise redirect to /login
         
         if ((path === '/') && props.authStatus && props.userType) {
            this.props.history.push('/panel');
         } 
         else if ((path === '/') && props.authStatus && !props.userType) {
            this.props.history.push('/merchants');
         }  
         // else if (path.startsWith('/panel') && !props.authStatus) {
         //    this.props.history.push('/');
         // }
      }

      render() {
         return <WrappedComponent {...this.props} />;
      }
   };
};

const mapStateToProps = state => {
   return {
      authStatus: state.auth.status,
      userType: state.user_type.status
   };
};

export default compose(
   connect(mapStateToProps),
   withAuth
);
