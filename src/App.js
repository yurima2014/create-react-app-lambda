import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"



/*
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

*/


class App extends Component {

  constructor(props) {
    super(props);
    this.questionsList = props.data;
    this.index = 0;
    this.score = 0;
    this.handleClickCorrect = this.handleClickCorrect.bind(this);
    this.handleClickIncorrect = this.handleClickIncorrect.bind(this);
    //this.handleTimedOutIncorrect = this.handleTimedOutIncorrect(this);
    this.proceedToNextQuestion = this.proceedToNextQuestion.bind(this);

    this.timer = 0;
  }


  handleClickCorrect(){
    console.log('Correct answer');

    switch (this.questionsList[this.index].difficulty) {

      case 'easy': this.score += 1; break;
      case 'meadium': this.score += 2; break;
      case 'hard': this.score += 3; break;
        default: break;

    };

    this.proceedToNextQuestion();
  };


  handleClickIncorrect(){
    console.log('Incorrect answer');
    this.proceedToNextQuestion();
  };

  /*
  handleTimedOutIncorrect(){
    clearTimeout(this.timer);
    this.proceedToNextQuestion();
  };*/

  proceedToNextQuestion(){
    clearTimeout(this.timer);
    this.index++;
    this.forceUpdate();

  };



  render() {

    let currQuestion = this.questionsList[this.index];
    this.timer = setTimeout(this.proceedToNextQuestion, 5000);


    if(this.index === this.questionsList.length)
    {
      clearTimeout(this.timer);
      return(


          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Updated <code>src/App.js</code>  as initial commit.

              </p>


              <p> Congratulations, you completed the quiz! Your score is {this.score} points</p>






            </header>
          </div>
      )
    }


    switch(currQuestion.type) {



      case 'multiple':
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Updated <code>src/App.js</code>  as initial commit.

                </p>



                <div>

                  <p>Category: {currQuestion.category}</p>
                <p>{currQuestion.question}</p>

                <button onClick={this.handleClickCorrect}> {currQuestion.correct_answer} </button>
                <button onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[0]} </button>
                <button onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[1]} </button>
                <button onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[2]} </button>


                </div>





              </header>
            </div>
        )


      case 'boolean':

        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Updated <code>src/App.js</code>  as initial commit.

                </p>



                <div>

                  <p>Category: {currQuestion.category}</p>
                  <p>{currQuestion.question}</p>

                  <button onClick={this.handleClickCorrect}> {currQuestion.correct_answer} </button>
                  <button onClick={this.handleClickIncorrect}> {currQuestion.incorrect_answers[0]} </button>


                </div>





              </header>
            </div>
        )


        default: return(
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Updated <code>src/App.js</code>  as initial commit.

                </p>


              </header>
            </div>
        )
    }


  }
}

export default App
