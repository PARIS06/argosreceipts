import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'

class Layout extends Component {
   render() {
      return <Grid container direction="column" className="app">{this.props.children}</Grid>;
   }
}

export default Layout;
