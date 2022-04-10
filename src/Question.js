import React, { Component } from "react";


const Question = function(props)
{
        const handleClickCorrect = function(){
            console.log('Correct answer');

        };


        const handleClickIncorrect = function(){
            console.log('Incorrect answer');
        };

        const category = props.data.category; //'CATEGORY';
        const type = props.data.type; //'TYPE';
        const difficulty = props.data.difficulty; //'DIFFICULTY';
        const question = props.data.question; //'QUESTION';

        const correctAnswer = props.data.correct_answer; //'CORRECT_ANSWER';
        const incorrectAnswers = props.data.incorrect_answers;//;['ONCORRECT_0', 'INCORRECT_1', 'INCORRECT_2'];

        let points = 10; // 10 points, 1 point deducted every second
        let timeLimit = 10; // 10 seconds to answer the question

        switch(type)
        {
            case 'multiple':
                return(
                    <div className="Question">

                        <p>Category: {category}</p>
                        <p>{question}</p>

                        <button onClick={handleClickCorrect}> {correctAnswer} </button>
                        <button onClick={handleClickIncorrect}> {incorrectAnswers[0]} </button>
                        <button onClick={handleClickIncorrect}> {incorrectAnswers[1]} </button>
                        <button onClick={handleClickIncorrect}> {incorrectAnswers[2]} </button>

                    </div>

                );


            case 'boolean':
                return(
                    <div className="Question">

                        <p>Category: {category}</p>
                        <p>{question}</p>

                        <button onClick={handleClickCorrect}> {correctAnswer} </button>
                        <button onClick={handleClickIncorrect}> {incorrectAnswers[0]} </button>


                    </div>

                );
        }
        // PLACEHOLDER
        // TODO: here, I need to add several buttons - 1 for each of the answers
        // TODO: FOR NOW, I will hard-code 4 buttons, each of which will have an 'onClick' method
        // I did this, and now I need to do more work.
        // and it should not be very hard
        // how can I insert different number of buttons?


}

export default Question