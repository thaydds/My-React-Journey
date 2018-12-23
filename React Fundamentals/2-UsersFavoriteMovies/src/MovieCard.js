import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MovieCard extends Component {
    render() {
        return (
            <div>
                 <li>{this.props.movie}</li>
                 {this.props.users.length > 0 ?
                    this.props.users.map( user => {
                        return <p>{user}</p>
                    }):
                        <p>Ninguem Favoritou</p> 
                }
            </div>  
        );
    }
}

export default MovieCard