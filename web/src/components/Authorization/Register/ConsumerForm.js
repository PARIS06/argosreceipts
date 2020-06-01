import React, {useState} from 'react';
import { withStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withFormik } from 'formik';
import * as Yup from 'yup';

import MuiPhoneNumber from 'material-ui-phone-number';


const styles = theme => ({
   Logo: {
      height: "7em",
      padding: "10px",
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
})
// const classes = useStyles()
//    const theme = useTheme()

const innerForm = props => {
   

   const { classes,
      values,  
      errors, 
      touched,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset
     } = props;


   return (
      <Grid container direction="row">
         <Grid item container direction="column" justify="center" alignItems="center">
            <Grid item>
               <Grid container direction="column">
                  <Grid item container direction="column" style={{maxWidth: "20em"}}>
                     <form onSubmit={handleSubmit}>
                        <Grid item>
                           <TextField 
                              required
                              fullWidth
                              label="Email" 
                              id="email"
                              type="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              helperText={touched.email && Boolean(errors.email)}
                              style={{marginTop: "2em"}} 
                           />
                        </Grid>
                           {touched.email && errors.email ? (<div>{errors.email}</div>) : null}
                        <Grid item>
                           <TextField 
                              required
                              fullWidth
                              label="Password" 
                              id="password"
                              name="password"         
                              type="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              helperText={touched.password && Boolean(errors.password)}
                              autoComplete="current-password"
                              style={{marginTop: "2em"}}
                           />
                        </Grid>
                           {touched.password && errors.password ? (<div>{errors.password}</div>) : null}
                        <Grid item>
                           <MuiPhoneNumber
                              defaultCountry={'us'} 
                              fullWidth
                              label="Phone Number" 
                              id="phone" 
                              disableAreaCodes
                           
                              placeholder="(   ) xxx-xxxx"
                              style={{marginTop: "2em"}}
                           />
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: "2em" }}>
                           <Button 
                              className={classes.button} 
                              variant= "contained" 
                              color="secondary"
                              type="submit"
                              disabled={isSubmitting} 
                              >
                                 Register
                           </Button>
                        </Grid>
                     </ form>
                  </Grid>
                 
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}

const consumerForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: ({ 
         email,
         password ,
         user_type
      }) => {
         return {
            email: '',
            password: '',
            user_type: 0
         };
      },

   // Add a custom validation function (this can be async too!)
   validationSchema: Yup.object().shape({
      email: Yup.string()
         .required('Email is required')
         .email('This is not a valid email'),
      password: Yup.string()
         .required('Password is required')
         .min(6, 'Your password has to be at least 6 characters')
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      props.onRegisterSubmit(values.email, values.password, values.user_type)
   }
})(innerForm);

export default withStyles(styles)(consumerForm);



