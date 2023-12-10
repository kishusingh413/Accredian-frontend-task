import Login from './components/login'
import './App.css';
// import { Button, TextField, AppBar, Toolbar, Typography, Container } from '@mui/material';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import SignUp from './components/signup';
import WelcomePage from './components/welcomePage';
import Home from './components/layout/Home'

function App() {
  return (
    //  <Router>
    //   <div className='App'>
    //   <Home />
    //    {/* <Routes>
    //     <Route exact path ='/' component={WelcomePage} />
    //    </Routes> */}
       
    //    <div className='container'>
    //      <Routes>
    //        <Route exact path="/login" component={Login} />
    //        <Route exact path="/signup" component={SignUp} />
    //      </Routes>
         
    //    </div>
    //   </div>
    
    //  </Router>
    <Router>
        <switch>
          <Routes>
          <Route path = '/' Component={WelcomePage} />
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={SignUp}/>
          </Routes>
        </switch>
    </Router>

  );
}

export default App;
