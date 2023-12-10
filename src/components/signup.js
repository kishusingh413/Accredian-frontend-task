import {React, Component} from "react";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography, FormControlLabel, Checkbox } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const paperStyle = {padding:20, width:280, height:"70vh", margin:"20px auto", backgroundColor:"#d4cedd"} ;
const btnStyle = {margin:"20px"}
const AvatarStyle = {backgroundColor:"green"}

class SignUp extends Component {
    render() {
    return(
            <Paper align="center" style={paperStyle}>
                <Grid align={"center"}>
                    <Avatar style={AvatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                    <Typography fontSize={14}>
                        Please fill this form to create an account!
                    </Typography>
                </Grid>
                <TextField variant="standard" label="Username" placeholder="Enter your name" fullWidth/>
                <TextField variant="standard" label="Email" placeholder="Enter your email" type="email" fullWidth />
                <TextField variant="standard" label="Password" placeholder="Enter a password" type="password" fullWidth />
                <TextField variant="standard" label="Confirm Password" placeholder="confirm your password" fullWidth />

                <FormControlLabel control={<Checkbox />} label="I accept terms and conditions*" />
                <Button variant="contained" style={btnStyle}>Sign Up</Button>

                <Typography>
                    Already have an account ?
                    <Link src="#">Login</Link>
                </Typography>
            </Paper>
    )
}
} ;

export default SignUp ;