import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the new CSS file

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="jumbotron bg-light p-4 shadow-lg rounded">
                <h1 className="display-5">Welcome to UnityBoard!</h1>
                <p className="lead">
                    "UnityBoard: Real-Time Collaboration, Simplified."
                </p>
                <hr className="my-4" />
                <p>
                    Work together on documents, share ideas, and communicate with your team. 
                </p>
                <p>
                    Empower your collaboration with UnityBoard's seamless experience.
                </p>
                <div className="mt-4">
                    <Link to="/register" className="btn btn-gradient btn-lg me-3">Register</Link>
                    <Link to="/login" className="btn btn-green btn-lg">Login</Link>
                </div>
            </div>
            <div className="features mt-5">
                <h2>Features</h2>
                <ul>
                    <li>Real-time document editing</li>
                    <li>Instant messaging</li>
                </ul>
            </div>
            <div className="images mt-5">
                <img src="https://media.licdn.com/dms/image/v2/D4E12AQGzoo6pEVHzOw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1708497265358?e=2147483647&v=beta&t=E21ztI-DIsho8WZH9iDgDi523_-S3ajCk-zQ3Dd4nT4" alt="Document Editing" className="feature-image" />
                <img src="https://img.freepik.com/premium-photo/digital-interface-realtime-document-collaboration-editing_1314467-213813.jpg?w=740" alt="Instant Messaging" className="feature-image" />
            </div>
        </div>
    );
};

export default LandingPage;