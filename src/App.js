import  React from 'react';
import Home from '../src/Pages/Home';
import DirectorMessage from '../src/Pages/DirectorMessage';
import ContactUs from '../src/Pages/ContactUs';
import About from '../src/Pages/About';
import SignInUp from '../src/Pages/SignInUp';
//import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/director" component ={DirectorMessage} />
            <Route path="/contact" component ={ContactUs} />
            <Route path="/about" component ={About} />
            <Route path="/signin" component={SignInUp} />
            
        </Switch>
        
    </Router>  
    </div>
  );
}

export default App;
