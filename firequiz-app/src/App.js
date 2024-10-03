import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import QuizInstructions from './components/quiz/QuizInstructions';

function App() {
  return (
   <Router>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/play/instructions" element={<QuizInstructions />} />
   </Routes> 
   </Router>
  );  
};

export default App;
