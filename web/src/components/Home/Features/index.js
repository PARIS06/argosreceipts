import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hero from './argos_graphic.svg';


const useStyles = makeStyles(theme => ({
   gridItem: {
      margin: "3em"
   },
   heroImage: {
      maxWidth: "50em",
      minWidth: "21em",
      marginTop: "2em",
      marginLeft: "10%"
   },
   mainContainer: {
      backgroundColor: "#f0f2f5"
   }
}))



const HomeFeatures = () => {
   
   const classes = useStyles();

   return (
  
      <Grid container direction="column" className={classes.mainContainer} >
         <Grid item className={classes.gridItem}>
            <Grid container justify="flex-end" alignItems="center" direction="row"> 
               <Grid sm item >
                  <Typography align="center" variant="h1" color="primary">
                     Coming Soon
                  </Typography>
               </Grid> 
               <Grid sm item className={classes.heroImage} >
                  <img src={Hero}  alt="Argos Logo" />
               </Grid>
            </Grid>               
         </Grid>   
      </Grid>
   )
};

export default HomeFeatures;
