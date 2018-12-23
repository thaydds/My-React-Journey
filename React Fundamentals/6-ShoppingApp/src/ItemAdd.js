import React, { Component } from 'react'
import './App.css';
import Button from './Button'

class ItemAdd extends Component {
    state = {
        value : ''
    }
    addItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.value)
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render(){
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <Button disabled={this.inputIsEmpty()} text='Add' />
                </form>
            </div>
        )
    }
}

export default ItemAdd