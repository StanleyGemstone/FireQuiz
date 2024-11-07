import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstructions = () => {
    const location = useLocation();
    const { state } = location
    const { playerName, selectedClass } = state;

    /* const handleLetsDoThis = () => {
        navigate('/play/quiz', { state: { playerName, selectedClass } } );
    };*/

    return (
        <Fragment>
            <Helmet>
            <title>Quiz-instruction</title>
            </Helmet>
            <div className="instructions container">
                <h1 className="welcome">Welcome { playerName.toUpperCase() }! </h1>
                <h1>How to play the game</h1>
                <p>Ensure you read carefully to finish.</p>
                <ul className="browser-default" id="main-list">
                    <li>The game has a duration of 30mins and ends as soon as you time elapses</li>
                    <li>Each game consists of 30 questions</li>
                    <li>Every question contains 4 options</li>
                    <li>Select the option which best answer the question by clicking (or selecting) it.</li>
                    <li>
                        Each game has 2 lifelines namely:
                        <ul id="sublist">
                            <li>2 50-50 chances</li>
                            <li>5 Hints</li>
                        </ul>
                    </li>
                    <li>
                        Selecting a 50-50 lifeline by clicking
                        <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                        will remove 2 wrong answers, leaving the correct anwer and one wrong answer
                    </li>
                    <li>
                        Using a hint by clicking the icon 
                        <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                        will remove one wrong answer leaving two wrong answer and one correct answer.
                        You can use many hint as possible on a single question
                    </li>
                    <li>Feel free to Quit the game at any time in that case you score will be displayed afterwards</li>
                    <li>The timer starts as soon as thr game loads</li>
                    <li>Let's do this if you think you've got what it takes?</li>
                </ul>
                <div>
                    <span className="left"><Link to="/">No take me back</Link></span>
                    <span className="right">
                            <Link 
                                to="/play/quiz" 
                                state={{ playerName, selectedClass }}>
                                    Okay, let's do this!
                            </Link>
                    </span>
                </div>
            </div>
        </Fragment>
        
)};

export default QuizInstructions;