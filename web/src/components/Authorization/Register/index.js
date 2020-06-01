import React, {useState} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import ConsumerForm from './ConsumerForm';
import MerchantForm from './MerchantForm';

import argosLogo from '../../../assets/Images/ARGOS_DATA_LOGO.svg'


const useStyles = makeStyles(theme => ({
   Logo: {
      height: "7em",
    },
    button: {
      ...theme.typography.logIn,
      borderRadius: "40px",
      width: "15em",
      "&:hover": {
        backgroundColor: "theme.palette.primary.light",
        color: "white"
        }  
    }
}))

const RegisterBox = props => {
   const classes = useStyles()
   const theme = useTheme()

   const [consumer, setConsumer] = React.useState(true)
   const [merchant, setMerchant] = React.useState(false)

   const handleMerchant = () => {
      setConsumer(false);
    };

    const handleConsumer = () => {
      setConsumer(true);
    };
  

   return (
      <Grid container direction="row">
         <Grid item container direction="column" justify="center" alignItems="center">
            <Grid item>
               <Grid container direction="column">
                  <Grid item container justify="center">
                     <Typography align="center" color="primary" variant="h4">Register</Typography>
                     <img src={argosLogo} className={classes.Logo} alt="argos logo" style={{marginTop: "2em"}} />
                  </Grid>
                  <Grid item container style={{maxWidth: "20em"}} >
                    <FormLabel component="legend" style={{marginTop: "2em"}} >Account Type</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="consumer" >
                        <FormControlLabel
                        onClick={handleConsumer}
                        value="consumer"
                        control={<Radio color="primary" />}
                        label="Consumer"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        onClick={handleMerchant}
                        value="merchant"
                        control={<Radio color="primary" />}
                        label="Merchant"
                        labelPlacement="bottom"
                        />          
                    </RadioGroup>
                  </Grid> 
                  { consumer ? <ConsumerForm history={props.history} onRegisterSubmit={props.onRegisterSubmit} /> : <MerchantForm  history={props.history} onRegisterSubmit={props.onRegisterSubmit}  />}     
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}

export default RegisterBox;


















// import React from 'react';
// import { Link } from 'react-router-dom';

// import SmallFormBox from '../../../components/UI/FormBoxes/Small';
// import SingleModuleButton from '../../../components/UI/Buttons/SingleModuleButton';
// import RegisterForm from './Form';
// import Loader from '../../../components/UI/Loader';

// const RegisterBox = props => (
//    <SmallFormBox>
//       {props.error ? <p>{props.error.message}</p> : null}
//       {props.loading ? (
//          <Loader />
//       ) : ( <form history={props.history} onSubmit={props.onRegisterSubmit}>
//                {props.children} 
//              </form>
//           // <RegisterForm history={props.history} onRegisterSubmit={props.onRegisterSubmit} />
//       )}
//       <p style={{textAlign: 'center'}}>
//          <Link to="/auth/login/">Already have an account?</Link>
//       </p>
//    </SmallFormBox>
// );

// export default RegisterBox;
