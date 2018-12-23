import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsList from './ItemsList'
import ItemAdd from './ItemAdd'
import ItemDelete from './ItemDelete'

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ItemAdd addItem={this.handleAddItem} />
        <ItemDelete onDeleteLastItem={this.handleDeleteLastItem} noItemsFound={this.noItemsFound} />
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default App;
