import React from 'react';
import {
  HashRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import Anime from './Views/Anime'
import AnimeProfile from './Views/AnimeProfile'

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

            <Route exact path = '/anime'> 
              <Anime /> 
            </Route> 

            <Route path = '/anime/:id'> 
              <AnimeProfile /> 
            </Route> 

          </Switch> 
        </div> 
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;
