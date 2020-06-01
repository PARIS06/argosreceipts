import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import IncomeStats from '../../../components/Widgets/IncomeStats';
import IconedList from '../../../components/Widgets/IconedList';
import SingleMessage from '../../../components/Widgets/SingleMessage';

import accountBackground from '../../../assets/Images/account_paper_background.svg';


const data = {
   listData: [
      {
         type: '',
         href: '/panel/transfers',
         title: '<strong>Target</strong> new receipt added',
         subtitle: '34 minutes ago'
      },
      {
         type: 'image',
         href: '',
         title: '<strong>Tali</strong> updated his pin numer',
         subtitle: '34 minutes ago'
      }
   ],
   messageData: {
      title: 'New receipt from Target',
      sender: 'Wells Fargo, customerservice@wellsfargo',
      recipient: 'Tali, Tali@oppenheimer.com',
      content:
         '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, laboriosam.</p><p>Qui porro voluptatibus nisi tempore nam deleniti quo. Porro, nulla.</p>'
   }
};
const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
    },
   toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em"
   },
   mainPaper: {
      padding: theme.spacing(7),
      color: theme.palette.text.secondary,
      backgroundImage: `url(${accountBackground})`
    },
  
}));


const PanelHome = ({ user }) => {
   const classes = useStyles();
   const theme = useTheme();


   return (
      <div className={classes.root}>
         <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item container direction="column" xs={12} md={12} style={{marginTop: "3.1em"}}>
               <Paper className={classes.mainPaper} variant="outlined">
                  <Typography variant="h3" align="center"> 
                     Welcome {user.firstName} {user.lastName}
                  </Typography>
               </Paper>
            </Grid>
            <Grid container={true} spacing={4}>
               <Grid item container direction="column" xs={12} md={8} lg={8}>
                  <Paper elevation={4}>
                     <div className="col-md-8">
                        <IncomeStats />
                     </div>
                  </Paper>
               </Grid>
               <Grid item container direction="column" xs={12} md={4} lg={4}>
                  <Paper elevation={4}>
                     <div>
                        <div>
                           <div>
                              <IconedList items={data.listData} />
                           </div>
                           <div>
                              <SingleMessage {...data.messageData} />
                           </div>
                        </div>
                     </div> 
                  </Paper>
               </Grid>
            </Grid>
         </Grid>
      </div>
   );
};


const mapStateToProps = state => {
   return {
      user: state.profile.data
   };
};

export default connect(mapStateToProps)(PanelHome);
   