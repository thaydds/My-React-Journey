import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Score = (props) => {
    return(
        <div>
            <p className="text">
                Your Score: {props.numCorrect}/{props.numQuestions}
            </p>
        </div>
    )
}

export default Score

