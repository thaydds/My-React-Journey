import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Game extends Component {
    state = {
        x: undefined,
        y: undefined,
        z: undefined,
        p: undefined
    }

    componentWillMount() {
        this.recalcularValores()
      }
    
    recalcularValores() {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const z = Math.floor(Math.random() * 100);

    this.setState(() => ({
    x: x,
    y: y,
    z: z,
    p : Math.floor(Math.random() * 3) + x + y + z
    }))
    }

    checkSum = (answer) => {

    const sum = this.state.x + this.state.y + this.state.z;
    console.log('x', this.state.x);
    console.log('y', this.state.y);
    console.log('z', this.state.z);
    console.log('soma', sum);
    console.log('p', this.state.p);
    console.log('props', answer)
    const resp = (sum === this.state.p && answer === true) || (sum !== this.state.p && answer === false) ?  true : false
    
    this.recalcularValores();
    console.log('teste', resp)
    return resp
    }

    render(){
        return(
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.x} + ${this.state.y} + ${this.state.y} = ${this.state.p}`}</p>
          </div>
          <button onClick={() => this.props.onCheckAnswer(this.checkSum(true))}>True</button>
          <button onClick={() => this.props.onCheckAnswer(this.checkSum(false))}>False</button>
        </div>
        )
    }

}

export default Game