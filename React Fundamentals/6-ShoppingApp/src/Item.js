import React from 'react'
import './App.css';

const Item = (props) => {
    return (
        <li key={props.index}>{props.item}</li>
    )
}

export default Item;