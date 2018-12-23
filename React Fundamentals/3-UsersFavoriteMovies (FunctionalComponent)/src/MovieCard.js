import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MovieCard = (props) => {
    return (
        <div>
                <li>{props.movie}</li>
                {props.users.length > 0 ?
                props.users.map( user => {
                    return <p>{user}</p>
                }):
                    <p>Ninguem Favoritou</p> 
            }
        </div>  
    );
}
export default MovieCard