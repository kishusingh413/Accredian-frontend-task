import { Avatar, Grid, Link, Paper, TextField, Typography, FormControlLabel, Checkbox, Button } from "@mui/material";
import {React, Component}from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

class Login extends Component{
    render(){
    const paperStyle ={padding :20, height :'70vh', width:280 , margin:"20px auto", backgroundColor:"#d4cedd"} ;
    const Avatarstyle ={backgroundColor : "#506650"}
    const btnStyle ={margin:"10px 0" } ;
    return(
        <div className="App">
        <Paper elevation={10} style={paperStyle}>
           <Grid align={"center"}>
              <Avatar style={Avatarstyle}><LockOutlinedIcon /> </Avatar>
              <h2>Sign Up</h2>
           </Grid>
           <TextField variant="standard" label="UserName" placeholder="Enter your name" fullWidth></TextField>
           <TextField variant="standard" label="Password" placeholder="Enter your password" type="password" fullWidth></TextField>
           
           <FormControlLabel required control={<Checkbox />} label="Remember me" />
           <Button variant="contained"  style={btnStyle} fullWidth>
             Login
           </Button>
           <Typography>
            <Link>
             Forget Password ?
            </Link>
           </Typography>
           <Typography>
              Don't have account ?
              <Link href="./signup">
                create account
              </Link>
           </Typography>
        </Paper>
      </div>
    ) 
}
}
// const Login = ()=>{
//   return <div>Login Page</div>
// }

export default Login ;
