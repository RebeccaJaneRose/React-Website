import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function tick() {
    const element = (
        <div>
            <h1>Hello, World!</h1>
            <h2>Today's date is {new Date().toLocaleDateString()}.</h2>
            <h2>It Is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
