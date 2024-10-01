import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'

function App() {
  return (
   <Router>
   <Route path="/" component={Home} /> 
   </Router>
  );  
};

export default App;
