import {React, Component} from "react";
import { Button, Grid, Paper, Typography ,Stack} from "@mui/material";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const paperStyle ={padding:30,width:280, height:"20vh", margin:"50px auto"}
const btnStyle = {margin:"20px auto"}


class WelcomePage extends Component {
  render(){
    return(
            <Paper elevation={20} style={paperStyle}>
            <Grid align="center" alignContent={"center"}>
              <Typography>
                WELCOME TO HOME PAGE
              </Typography>
              <Stack spacing={1} direction="row">
              <Button variant="contained" style={btnStyle} href="/login">Login</Button>
              <Button variant="contained" style={btnStyle} href="/signup">Sign Up </Button>
              </Stack>
            </Grid>
            </Paper>
    )
 }
}

export default WelcomePage ;