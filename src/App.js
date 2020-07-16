import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import Anime from './Views/Anime'

function App() {
  return (
    <div className = 'relative pb-10 min-h-screen bg-overlay bg-faded'>
      <Router> 
        <Header /> 
        <div> 
          <Switch> 

            <Route exact path = '/'> 
              <Home /> 
            </Route> 

            <Route path = '/anime'> 
              <Anime /> 
            </Route> 

          </Switch> 
        </div> 
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;
