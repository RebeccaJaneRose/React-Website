import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const name = 'Rebecca Rose'
const element =  <h1>Hello, {name}</h1>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
