## InputMirror

 Edit the code to make the printed text mirror what we type into the input
field. When we erase all of the text, nothing should be printed to the screen.

### Requirements :wrench:
- Node.js >= v7.0.0
- NPM >= 3.10.8

### How to Run :runner:
- npm install
- npm start

### How i solve it

Here i learn how to create a controlled component

1. App.js

```javascript
class App extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something"
                 value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}
          />
          <p className="echo">Mirror:</p>
          <p>{this.state.query}</p>
        </div>
      </div>
    );
  }
}

export default App;
```
