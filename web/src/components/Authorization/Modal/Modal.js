import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import Paper from '@material-ui/core/Paper';

import LoginForm from '../Login/Form';
import RegisterBox from '../Register/index';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '5px solid theme.palette.primary.main',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '25px',
    outline: "none",
    width: "25em"
  },
  toggleLogin: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "absolute",
    top: "28%",
    left: "62.5%",
    width: "10%",
    borderRadius: "20px",
    height: "50%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    transition: `all 400ms ease-in-out`,
  },
  toggleRegister: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "absolute",
    top: "30%",
    right: "62.5%",
    width: "10%",
    borderRadius: "20px",
    height: "40%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    transition: `all 400ms ease-in-out`,
    justifyContent: "center",
    alignItems: "center",
},
toggleText:{
  justify: "center"
},
  button : {
    ...theme.typography.logIn,
    borderRadius: "50px",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
        backgroundColor: "theme.palette.primary.light",
        color: "white"
        }     
   },
   extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const LoginModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [logIn, setLogin] = React.useState(true)
  // const [register, setRegister] = React.useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogIn = () => {
      setLogin( prevState => !prevState)
  }

//   const handleRegister = () => {
//     setRegister(true)
// }

let AttachedClasses = [classes.toggleLogin]

if (logIn) {
    AttachedClasses = [classes.toggleRegister]
} 


  return (
    <div>
       <Fab onClick={handleOpen} className={classes.button} variant="extended" color="secondary">
        <LockOpenRoundedIcon className={classes.extendedIcon} />
         Log in
       </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {logIn ? <LoginForm history={props.history} onLoginSubmit={props.onLoginSubmit} /> : <RegisterBox history={props.history} onRegisterSubmit={props.onRegisterSubmit} />}
            <Grid item container direction="column" alignItems="center" justify="center" onClick={handleLogIn}>
                <Grid item container justify="center" alignItems="center">
                     <Paper className={AttachedClasses} elevation={3}>
                        <Typography variant="h5" >
                          { logIn? "Register" : "Log In"}
                        </Typography>
                     </Paper>
                </Grid>    
            </Grid> 
          </div>
        </Fade> 
      </Modal>
    </div>
  );
}

export default LoginModal;