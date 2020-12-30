import  React, { useState } from 'react';
import './SignUp.css';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Notification from '../../notifications/Notifications';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl:{
    margin: theme.spacing(1),
    minWidth: 120,
    },
    vertical:{
      minWidth:"16px",
    },
    dialogWrapper:{
        padding:theme.spacing(2),
        position:"absolute",
        top:theme.spacing(18),

    },
    dispDialogTitle :{
      position:"relative",
      left:"320px",
      bottom:"10px",
      minWidth:"40px",
    },
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const SignUp = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [option, setOption] = useState('');
    const [notify,setNotify] = useState({
      isOpen :false,
      message : '',
      type:''
    });

    let isError = false;
    const handleChange = (event) => {
      //const name = event.target.name;
      setOption(event.target.value,);
      console.log(event.target.value);
      };

    const handleClick = (e) => {
        setOpen(false);
        e.preventDefault();
        setNotify({
          isOpen:true,
          message:"Successfully Registered",
          type:"success"
        })
      };

      const handleClose = (e) => {
        setOpen(false);
        e.preventDefault();
      }



    const handleError = (e) => {

    }
    
    
    return (
        <div>
            <Dialog
        classes={{paper:classes.dialogWrapper}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        >
                <DialogTitle id="alert-dialog-slide-title">{"Not Signed Up?"}
                  <Button className={classes.dispDialogTitle} color="secondary" variant="contained" onClick={handleClose}>X</Button>
                
                </DialogTitle>
                    <DialogContent dividers>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Name" />
                        <TextField id="standard-basic" label="Email-Id" />
                        <TextField
                              id="standard-password-input"
                              label="Password"
                              type="password"
                              autoComplete="current-password"
                              onChange={handleError}
                              // error = {isError}
                              // helperText={isError ? "Must not be empty" : " "}
                       />
                        <TextField id="standard-basic" 
                                   label="Contact No"
                                   type="number"
                                    />
                        <TextField id="standard-basic" label="City" />
                        
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Vertical</InputLabel>
        <Select
          className={classes.vertical}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          onChange={handleChange}
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="School">School</MenuItem>
          
        </Select>
        </FormControl>
                    </form>
                    </DialogContent>
                    <DialogActions>
          <Button onClick={handleClick} color="primary" variant="contained">
            Sign-Up
          </Button>
          <Button 
          onClick={handleClose} 
          color="secondary" 
          variant="contained">
            Cancel
          </Button>
        </DialogActions>    
           

            </Dialog>
            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
        </div>
    )
}

export default SignUp
