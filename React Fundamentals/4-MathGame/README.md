## MathGame

Create a game that shows an equation of the form X+Y+Z=P. Here,
X, Y, and Z should be random numbers, and P should be the proposed answer. The
user should be able to answer wether it is true that the sum of X, Y, and Z
equals the proposed answer P. The user gets a point for each question the user
answers correctly. The score is displayed in this format: [number of correct
answers]/[number of questions answered]. Every time the user answers a question,
a new question that uses randomly generated numbers is displayed.

### Requirements :wrench:
- Node.js >= v7.0.0
- NPM >= 3.10.8

### How to Run :runner:
- npm install
- npm start

### How i solve it

I really enjoy this problem, 'cause I discover the React management state playground haha

I learned a cool stuff here e i will share with 'ya
how to change Parent state with a children component.

1.App.js

```javscript
  state = {
    numQuestions: 0,
    numCorrect: 0,
    
  }
  
  checkAnswer = (answer) => {
    console.log("answer", answer);
    answer === true ? this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
      numCorrect: prevState.numCorrect +1
    })) :
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1
    }))

  }

  render() {
    ...
        <Game onCheckAnswer={this.checkAnswer} />
    ...
  }


export default App;
```
We can pass a function by props to a children component e invoque there.

2. Game.js
```javascript
<button onClick={() => this.props.onCheckAnswer(this.checkSum(true))}>True</button>
```

