import React from 'react';
import { Grid , 
        Paper,
        Avatar,
        TextField , 
        Button,
        Container,
        FormControl,
        InputAdornment,
    
        } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Email ,LockRounded} from '@material-ui/icons';
import './Signin.css';
import { makeStyles } from '@material-ui/core/styles';
const sLogo = process.env.PUBLIC_URL + '/assets/images/';
// const Signin = () => {
// const paperStyle = {
//     padding:20,
//     height: "70vh",
//     width:300,
//     margin:"50px auto",
//     // backgroundColor:"#8181fe"
//     backgroundColor:"#33b5e5"
//     // backgroundCcolor: "#ffffff",
//     // display:"flex",
//     // alignItems:"center",
//     // justifyContent:"center",
//     // flexDirection:"column",
//     // padding: "0 50px",
//     // height: "100%",
//     // textAlign:"center"

// }

//     return (
//         <>
//         <Container>
//         <Grid>
//             <Paper elevation={10} style={paperStyle} >
//             <Grid align="center">
//                 <Avatar style={{backgroundColor:"#000"}}><LockOpenIcon /></Avatar>
//                     <h2 style={{color:"#fff"}}>Sign In</h2>
//             </Grid>
//             <TextField style={{color:"#fff",fontWeight:"20px",marginBottom:"20px"}} label="Email id" placeholder="Enter your email-id" fullWidth required/>
//             <TextField style={{color:"#fff",fontWeight:"20px",marginBottom:"50px"}} label="password" placeholder="Enter your password" type="password" fullWidth required/>
//             <Button type="submit" variant="contained" color="primary" fullWidth>SIGN IN</Button>
//             </Paper>
//         </Grid>
//         </Container>
//         </>
        
            
        
//     )
// }
const useStyles = makeStyles((theme) => ({
    newUserButton : {
        position:"relative",
        bottom:"60px",
        textTransform:"none",
    },


}));

const Signin = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container style={{minHeight:"100vh"}}>
                <Grid item xs={12} sm={6}>
                    <img src={`${sLogo}Signlogo.jpg`} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="SignLogo" />

                </Grid>
                <Grid container item xs={12} sm={6} 
                    alignItems="center" 
                    direction="column" 
                    style={{padding:10}}
                    justify="space-between"
                >
                <div />
                <div style={{display:"flex", flexDirection:"column", maxWidth:400,minWidth:300}}>
                    <Grid container justify="center">
                       <img src={`${sLogo}logo.png`} alt="logo" width={200} /> 
                    
                    </Grid>
                    <form>
                    <TextField label="Email Id" 
                               margin="normal" 
                               InputProps={{
                                   startAdornment: 
                                   <InputAdornment position="start">
                                   <Email />
                                   </InputAdornment>}}
                                fullWidth
                    />
                    <TextField label="Password" 
                               type="password" 
                               margin="normal"
                               InputProps={{
                                   startAdornment: 
                                   <InputAdornment position="start">
                                   <LockRounded />
                                   </InputAdornment>}} 
                                   fullWidth    
                                   />
                    <div style={{height:20}}/>
                    <Button type="submit" color="primary" variant="contained" fullWidth >SIGN IN</Button>
                    </form>
                    <div style={{height:20}}/>
                    <ul>
                        <li style={{listStyle:"none",textAlign:"center",cursor:"pointer"}}>Forgot Password ?</li>
                    </ul>
                </div>
                <Grid Container justify="center" spacing={2}>
                    <Grid Item>
                        <Button className={classes.newUserButton}  variant="outlined" >New User? Register Now</Button>
                    </Grid>            
                    {/* <Grid Item>
                        <Button>Forgot Password?</Button>
                    </Grid>             */}
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
 
export default Signin
