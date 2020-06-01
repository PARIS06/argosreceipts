import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme} from '@material-ui/core/styles';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Logo from '../../../assets/Images/argoslogo.svg';

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
       
    },
    logoContainer: {
       "&:hover": {
          backgroundColor: "transparent"
       }
    },
    Logo: {
      height: "7em",
      padding: "10px",
      [theme.breakpoints.down("md")]: {
         height: "6em"
      },
      [theme.breakpoints.down("xs")]: {
         height: "5.5em"
      }
    },
    tabContainer: {
       marginLeft: "auto"
    },
    tab: {
      ...theme.typography.tab
    },
    drawerIconContainer: {
       "&:hover": {
          backgroundColor: "transparent"
       },
       marginLeft: "auto"
    },
    drawerIcon: {
       height: "50px",
       width: "50px"
    },
    drawer: {
       backgroundColor: theme.palette.common.argosBlue,
       marginTop: "3em"
    },
    drawerItem: {
       ...theme.typography.tab,
       color: "white",
       opacity: 0.7
    },
    drawerItemSelected: {
       "& .MuiListItemText-root": {
         opacity: 1
       }
    },
    appbar: {
       zIndex: theme.zIndex.modal + 1
    }
 }))


const MainNavigation = props => {
   const classes = useStyles();
   const theme = useTheme();
   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
   const matches = useMediaQuery(theme.breakpoints.down("md"));

   const [openDrawer, setOpenDrawer] = useState(false);
   const [value, setValue] = useState(0);
   const [selectedIndex, setSelectedIndex] = useState(0);


   const handleChange = (e, newValue) => {
      setValue(newValue);
   }

   const routes = [
      {name: "Home", link: "/panel", icon: <HomeRoundedIcon />, mobileIcon: <HomeRoundedIcon color="secondary" />,  activeIndex: 0, selectedIndex: 0 }, 
      {name: "Receipts", link: "/panel/receipts", icon: <ReceiptRoundedIcon />, mobileIcon: <ReceiptRoundedIcon color="secondary" />,  activeIndex: 1, selectedIndex: 2 }, 
      {name: "Cards", link: "/panel/cards", icon: <CreditCardRoundedIcon />, mobileIcon: <CreditCardRoundedIcon color="secondary" />,  activeIndex: 2, selectedIndex: 3 }, 
      {name: "Profile", link: "/panel/profile", icon: <PersonRoundedIcon />, mobileIcon: <PersonRoundedIcon color="secondary" />,  activeIndex: 3, selectedIndex: 4 },
   ];

   

   useEffect(() => {
      [...routes].forEach(route => {
         switch (window.location.path) {
            case `${route.link}`:
               if (value !== route.activeIndex) {
                  setValue(route.activeIndex)
               }
               break;
             default:
               break;
         }
      })
   }, [value, routes, selectedIndex]);

   const tabs = (
      <Fragment>
         <Tabs 
            value={value} 
            className={classes.tabContainer} 
            onChange={handleChange}
         >
         {routes.map((route, index) => (
            <Tab 
               key={`${route}${index}`}
               className={classes.tab} 
               component={Link} 
               to={route.link} 
               label={route.name}
               icon={route.icon} 
            /> 
         ))}
            
         </Tabs>
      </Fragment>
   );

   const drawer = (
      <Fragment>
         <SwipeableDrawer 
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes={{paper: classes.drawer}}
            >
            <div className={classes.toolbarMargin} />
               <List>
                  {routes.map(route => (
                     <ListItem
                        key={`${route}${route.activeIndex}`}
                        onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}}
                        divider 
                        button 
                        component={Link}
                        to={route.link}
                        selected={value === route.activeIndex}
                        classes={{ selected: classes.drawerItemSelected }}
                     >
                        <ListItemIcon>
                           {route.mobileIcon}
                        </ListItemIcon>
                        <ListItemText 
                           disableTypography
                           className={classes.drawerItem} 
                        >
                           {route.name}
                        </ListItemText>
                     </ListItem>
                  ))}
               </List>
         </SwipeableDrawer> 
         <IconButton 
            className={classes.drawerIconContainer}
            onClick={ () => setOpenDrawer(!openDrawer)} 
            disableRipple
         >
            <MenuRoundedIcon 
               color= "secondary" 
               className={classes.drawerIcon}
            />
         </IconButton>
      </Fragment>
   );

   return (
      <Fragment>
          <ElevationScroll>
            <AppBar className={classes.appbar}>
               <Toolbar disableGutters>
                  <Button 
                     className={classes.logoContainer}
                     component={Link} 
                     to="/panel"
                     disableRipple 
                     onClick={() => setValue(0)}>
                     <img src={Logo} alt="Argos Logo" className={classes.Logo}></img>
                  </Button>
                  {matches ? drawer : tabs} 
               </Toolbar>
            </AppBar>
         </ElevationScroll>
        
      </Fragment>
     
   );
};

export default MainNavigation;

