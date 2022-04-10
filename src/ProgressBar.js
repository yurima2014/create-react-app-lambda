import React, { Component } from "react";

/*
This class represents a progress bar.
Progress bar holds count of all questions,
as well as the total score (points earned by th player)
 */
const ProgressBar = function(props)
{
        let score = 0;
        let totalQuestions = 0;
        let currentQuestions = 0;
        return(<p>PLACEHOLDER_PROGRESS_BAR {props.data}</p>);

}

export default ProgressBar