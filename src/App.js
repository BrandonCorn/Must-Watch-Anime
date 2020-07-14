import React from 'react';
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'

function App() {
  return (
    <div className = 'relative pb-10 min-h-screen bg-overlay bg-faded'>
      <Header /> 
      <Home /> 
      <Footer /> 
    </div>
  );
}

export default App;
