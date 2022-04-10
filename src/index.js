import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



window.onload = function()
{
    const contentUrl = 'https://opentdb.com/api.php?amount=100';

    fetch(contentUrl)
        .then(response => response.json())
        .then((jsonData) => {
            ReactDOM.render(<App data={jsonData.results}/>, document.getElementById('root'));
            serviceWorker.unregister()
        })
        .catch((error) => {
            console.error(error)
        });

};


