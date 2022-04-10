import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Question from "./Question";
import ProgressBar from "./ProgressBar";


window.onload = function()
{
    const contentUrl = 'https://opentdb.com/api.php?amount=100';

    fetch(contentUrl)
        .then(response => response.json())
        .then((jsonData) => {
            // jsonData is parsed json object received from url
            console.log(jsonData.results);
            let indexStart = 0;
            ReactDOM.render(<App data={jsonData.results}/>, document.getElementById('root'));
            //ReactDOM.render(<Question data={jsonData.results[0]} indexStart={indexStart}/>, document.getElementById('question'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
            serviceWorker.unregister()
        })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        });

};

;
