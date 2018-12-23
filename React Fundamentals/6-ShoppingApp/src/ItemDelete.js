import React from 'react'
import Button from './Button'
import './App.css'

const ItemDelete = (props) => {
    const deleteLastItem = (event) => {
        props.onDeleteLastItem();
    }
    return(
        <Button onClick={deleteLastItem} disabled={props.noItemsFound()} text="Delete Last Item" />
    )
}

export default ItemDelete