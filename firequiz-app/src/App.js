import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
   <Router>
      <Routes>
          <Route path='/' Component={Home} />
          <Route path='/play/instructions' Component={QuizInstructions} />
          <Route path='/play/quiz' Component={Play} />
          <Route path='/play/quizsummary' Component={QuizSummary} />
      </Routes>    
   </Router>
  );  
};

export default App;
