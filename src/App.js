import React, {Component} from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.questionsList = props.data;
        this.index = 0;
        this.score = 0;
        this.handleClickCorrect = this.handleClickCorrect.bind(this);
        this.handleClickIncorrect = this.handleClickIncorrect.bind(this);
        this.proceedToNextQuestion = this.proceedToNextQuestion.bind(this);

        this.timer = 0;
        this.correctAnswers = 0;
        this.pointsTotal = 0;


      const fixQuoteSymbols = function(str){

        return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
      };


      for(let i=0; i<this.questionsList.length; i++)
      {
        this.questionsList[i].question = fixQuoteSymbols(this.questionsList[i].question);
        this.questionsList[i].correct_answer = fixQuoteSymbols(this.questionsList[i].correct_answer);
        for(let j=0; j < this.questionsList[i].incorrect_answers.length; j++)
          this.questionsList[i].incorrect_answers[j] = fixQuoteSymbols(this.questionsList[i].incorrect_answers[j]);

        switch (this.questionsList[this.index].difficulty) {

          case 'easy':
            this.pointsTotal += 1;
            break;
          case 'medium':
            this.pointsTotal += 2;
            break;
          case 'hard':
            this.pointsTotal += 3;
            break;
          default:
            break;

        }
      }
    }


    handleClickCorrect() {

        switch (this.questionsList[this.index].difficulty) {

            case 'easy':
                this.score += 1;
                break;
            case 'medium':
                this.score += 2;
                break;
            case 'hard':
                this.score += 3;
                break;
            default:
                break;

        }
        ;
        this.correctAnswers++;

        this.proceedToNextQuestion();
    };


    handleClickIncorrect() {
        this.proceedToNextQuestion();
    };


    proceedToNextQuestion() {
        clearTimeout(this.timer);
        this.index++;
        this.forceUpdate();
    };


    render() {


        let currQuestion = this.questionsList[this.index];
        this.timer = setTimeout(this.proceedToNextQuestion, 15000);

        if (this.index === this.questionsList.length) {
            clearTimeout(this.timer);
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>Progress: {this.index} / {this.questionsList.length} questions </p>
                        <p> Congratulations, you completed the quiz! Your score is {this.score} / {this.pointsTotal} points. Questions answered correctly: {this.correctAnswers} / {this.questionsList.length}</p>
                    </header>
                </div>
            )
        }


        switch (currQuestion.type) {

            case 'multiple':
                return (
                    <div className="App">
                        <header className="App-header">
                          <p>Answer questions to complete the quiz. You will have 15 seconds to answer each question. You will score points for each question, based on its difficulty: easy - 1 point, medium - 2 points, hard - 3 points. Unanswered questions score 0 points.</p>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>Progress: {this.index} / {this.questionsList.length} questions </p>
                            <p> Score: {this.score}</p>

                            <div>

                                <p>Category: "{currQuestion.category}", Difficulty: "{currQuestion.difficulty}"</p>
                                <p>{currQuestion.question}</p>

                                <button onClick={this.handleClickCorrect}> {currQuestion.correct_answer} </button>
                                <button
                                    onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[0]} </button>
                                <button
                                    onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[1]} </button>
                                <button
                                    onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[2]} </button>


                            </div>


                        </header>
                    </div>
                )


            case 'boolean':

                return (
                    <div className="App">
                        <header className="App-header">
                          <p>Answer questions to complete the quiz. You will have 15 seconds to answer each question. You will score points for each question, based on its difficulty: easy - 1 point, medium - 2 points, hard - 3 points. Unanswered questions score 0 points.</p>
                          <img src={logo} className="App-logo" alt="logo"/>
                            <p>Progress: {this.index} / {this.questionsList.length} questions </p>
                            <p> Score: {this.score}</p>
                            <div>

                                <p>Category: {currQuestion.category}</p>
                                <p>{currQuestion.question}</p>

                                <button onClick={this.handleClickCorrect}> {currQuestion.correct_answer} </button>
                                <button
                                    onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[0]} </button>


                            </div>


                        </header>
                    </div>
                )


            default:
                return (
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Updated <code>src/App.js</code> as initial commit.
                            </p>


                        </header>
                    </div>
                )
        }


    }
}

export default App
