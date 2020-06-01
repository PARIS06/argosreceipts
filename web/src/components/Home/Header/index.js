import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';


import Login from '../../../containers/Authorization/Login/';
import Logo from '../../../assets/Images/argoslogo.svg';

const HomeHeader = props => {
   function ElevationScroll(props) {
      const { children } = props;
     
      const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
      });
    
      return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      });
    }

    const useStyles = makeStyles(theme => ({
       toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em"
       },
       Logo: {
         height: "7em",
         padding: "10px",
       },
       tabContainer: {
          marginLeft: "auto"
       }
    
    }))

    const classes = useStyles()

   return (
      <React.Fragment>
         <ElevationScroll>
            <AppBar position="fixed" style={{backgroundColor: "transparent"}}>
               <Toolbar>
                  <img src={Logo} alt="Argos Logo" className={classes.Logo}></img>
                  <Tabs value={false} className={classes.tabContainer}>
                     <Login 
                        history={props.history}
                        onLoginSubmit={props.onLoginSubmit}
                        onRegisterSubmit={props.onRegisterSubmit} 
                        />
                  </Tabs>
               </Toolbar>
            </AppBar>
         </ElevationScroll>
         <div className={classes.toolbarMargin}></div>
      </React.Fragment>
      
      // <header className="navigation-header">
      //    <div className="user-profile-box">
      //       <Link to="/panel/profile">
      //          <Logo />
      //          {/* <span>
      //             {props.user.firstName} {props.user.lastName}
      //          </span> */}
      //       </Link>
      //    </div>

      //    <ul className="navigation-header-links">
      //       <li>
      //          <Link to="/auth/login/">Login</Link>
      //       </li>
      //       <li>
      //          <Link to="/auth/create-user/">Register</Link>
      //       </li>
      //       <li className="toggle-menu">
      //          <button onClick={props.toggleMobileNav}>
      //             <i className="ion-navicon-round" />
      //          </button>
      //       </li>
      //    </ul>
      // </header>
   );
};

export default HomeHeader;