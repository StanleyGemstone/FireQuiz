import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Helmet>
                <title>FireQuiz-Homepage</title>
            </Helmet>
            <div id="home">
                <section>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1>FireQuiz</h1>
                    <div className="play-button-container">
                        <ul>
                            <li><Link className="play-button" to="/play/playersetup">Play</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup">Sign up</Link>
                    </div>
               </section>
            </div>
        </>
);
}
    

export default Home;