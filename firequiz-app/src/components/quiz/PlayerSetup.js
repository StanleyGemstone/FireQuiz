import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PlayerSetup = () => {
    const [playerName, setPlayerName] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        if (playerName && selectedClass) {
            navigate('/play/instructions', { state: { playerName, selectedClass } } );
        } else {
            alert('Please enter your name and select a class to continue.');
        }
    };

    /* const handleClassChange = (event) => {
        setSelectedClass(event.target.value)
    }; */

    return (
        <Fragment>
            <Helmet><title>Player Setup-page</title></Helmet>
            <div className="player-setup">
                <form className="player-form">
                    <h1>Enter Your Details</h1>
                    <div className="name">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={playerName}
                            onChange={(event) => setPlayerName(event.target.value)}
                            className="name-input"
                        />
                    </div>

                    <div className="select-class">
                            <input type="radio"
                                id="jss1"
                                name="class"
                                value="jss1"
                                checked={selectedClass === 'jss1'}
                                onChange={(event) => setSelectedClass(event.target.value)}
                                />
                                <label className="radio-button" htmlFor="jss1">JSS1</label>
                        
                            <input type="radio"
                                id="jss2"
                                name="class"
                                value="jss2"
                                checked={selectedClass === 'jss2'}
                                onChange={(event) => setSelectedClass(event.target.value)}
                                />
                                <label className="radio-button" htmlFor="jss2">JSS2</label>
                        
                            <input type="radio"
                                id="jss3"
                                name="class"
                                value="jss3"
                                checked={selectedClass === 'jss3'}
                                onChange={(event) => setSelectedClass(event.target.value)}
                                />
                                <label className="radio-button" htmlFor="jss3">JSS3</label>
                    </div>
                    <div className="select-class">
                            <input type="radio"
                                id="ss1"
                                name="class"
                                value="ss1"
                                checked={selectedClass === 'ss1'}
                                onChange={(event) => setSelectedClass(event.target.value)}
                                />
                                <label className="radio-button" htmlFor="ss1">SSS1</label>
                        
                            <input type="radio"
                                id="ss2"
                                name="class"
                                value="ss2"
                                checked={selectedClass === 'ss2'}
                                onChange={(event) => setSelectedClass(event.target.value)}
                                />
                                <label className="radio-button" htmlFor="ss2">SSS2</label>
                        
                            <input type="radio"
                                id="ss3"
                                name="class"
                                value="ss3"
                                checked={selectedClass === 'ss3'}
                                onChange={(event) => setSelectedClass(event.target.value)}
                                />
                                <label className="radio-button" htmlFor="ss3">SSS3</label>
                    </div>
                    <button type="button" className="left start-quiz" onClick={handleStartQuiz}>Start Quiz</button>
                </form>
            </div>
        </Fragment>
    );
};

export default PlayerSetup;

