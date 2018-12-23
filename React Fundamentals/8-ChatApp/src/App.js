import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [{ username: 'Amy' }, { username: 'Jon' }];

class App extends Component {
  state = {
    messages: [],
  };
  onMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    };
    this.setState(prevState => ({ messages: [...prevState.messages, newMessage] }));
  };
  render() {
    const { messages } = this.state;
    console.log('this.state.messages', this.state.messages)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={messages}
              onMessage={this.onMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
