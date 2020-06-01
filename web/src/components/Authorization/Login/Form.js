import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import * as actions from '../../../store/Actions/';
import argosLogo from '../../../assets/Images/ARGOS_DATA_LOGO.svg'

import { withFormik } from 'formik';
import * as Yup from 'yup';


const styles = (theme) => ({
   Logo: {
      height: "7em",
      padding: "5px",
      margin: `0 auto`
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
});


   // const theme = useTheme()


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
                  <Grid item container justify="center">
                     <Typography color="primary" variant="h4">Log In</Typography>
                     <img src={argosLogo} className={classes.Logo} alt="argos logo" style={{marginTop: "2em"}} />
                  </Grid>
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
                        <Grid item container justify="center" style={{ marginTop: "2em" }}>
                           <Button 
                              className={classes.button}
                              variant= "contained" 
                              type="submit"
                              disabled={isSubmitting} 
                              color="secondary">
                                 Log in
                           </Button>
                        </Grid>
                     </ form>
                     {/* )} */}
                     {/* </Formik> */}
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
};

const LoginForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: ({ 
         email,
         password 
      }) => {
         return {
            email: '',
            password: ''
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
      props.onLoginSubmit(values.email, values.password)
   }
})(innerForm);

export default withStyles(styles)(LoginForm);



