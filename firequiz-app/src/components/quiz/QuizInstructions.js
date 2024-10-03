import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstructions = () => (
    <>
        <helmet><title>Quiz Instruction</title></helmet>
        <div className="instuctions-container">
        <h1>How to play the game</h1>
        <p>Ensure you read carefully to finish.</p>
        <ul className="browser-default" id="main-list">
            <li>The game has a duration of 15mins and ends as soon as you time elapses</li>
            <li>Each game consists of 15 questions</li>
        </ul>
        </div>
    </>
    
)

export default QuizInstructions;