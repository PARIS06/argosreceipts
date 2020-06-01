import React, { Fragment, useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme} from '@material-ui/core/styles';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ImportExportRoundedIcon from '@material-ui/icons/ImportExportRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

import ReceiptsListEl from '../ListElement';

const useStyles = makeStyles(theme => ({
   root: {
      borderRadius: "25px",
      '& .MuiTextField-root': {
        width: 500,
        backgroundColor: "white",
        [theme.breakpoints.down("md")]: {
         width: 400
      },
      [theme.breakpoints.down("sm")]: {
         width: 175
      },
   },
},
   toolbarMargin: {
      ...theme.mixins.toolbar,
      
   },
   appbar: {
      zIndex: theme.zIndex.modal + 1
   },
   margin: {
      margin: theme.spacing(1)
   },
   button : {
      ...theme.typography.logIn,
      outline: "none",
      boxShadow: "none",
      height: 40,
      borderRadius: "25px",
      "&:hover": {
          backgroundColor: "theme.palette.primary.light",
          color: "white"
          }     
     },
}))

const ReceiptsList = props => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));

   const [search, setSearch] = useState('');
   const [searchResults, setSearchResults] = useState('');
   const inputRef = useRef('search');



   const findReceipt = e => {
      setSearch(e.target.value);
   };

   useEffect(() => {
   const results = props.receipts.filter(receipt =>
      receipt.type.toLowerCase().includes(search)||
      receipt.reference.toLowerCase().includes(search)
   );
   setSearchResults(results);
   }, [search]);

       // Allow filtering by merchant's name or receipt reference
        const searchText = search.toLowerCase();
        const receiptsList = props.receipts
        .map((receipt, i) => (
            <ReceiptsListEl
               key={receipt.receipt_number}
               {...receipt} 
               matchUrl={props.match.url} />
        ));

      return (
         <div  style={{marginTop: "6em"}}>
            <Typography variant="h1" color="primary" align="center"> Your Receipts</Typography>

           
          
            <div style={{marginTop: "2em"}} >
               
               
                  <Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
                     <Grid item>
                        <Button
                           variant="contained"
                           color="secondary"
                           className={classes.button}
                           startIcon={<FilterListRoundedIcon />}
                           component={ Link } 
                           to={`${props.match.url}/new`}
                           >
                           Filter
                        </Button>
                     </Grid>
                     <Grid item className={classes.root}>
                        <TextField
                           align="center" 
                           id="search" 
                           size="small" 
                           label="Search for receipts..." 
                           variant="outlined"
                           type="text"
                           value={search}
                           onChange={findReceipt}
                           ref={inputRef} 
                        />
                     </Grid>
                     <Grid item>
                        <Button
                           variant="contained"
                           color="secondary"
                           className={classes.button}
                           startIcon={<ImportExportRoundedIcon />}
                           component={ Link } 
                           to={`${props.match.url}/new`}
                           >
                           Export
                        </Button>
                     </Grid>
                  </Grid>
         
            </div>

            <Paper style={{marginTop: "2em"}}>{receiptsList}</Paper>
         </div>
      );
   }




const mapStateToProps = state => {
   return {
      receipts: state.receipts.data,
      receiptsCount: 20 // FAKE IT: better API needed
   };
};

export default connect(mapStateToProps)(ReceiptsList);