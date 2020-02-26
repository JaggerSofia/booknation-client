import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App';
import './index.css';

console.log(process.env)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));