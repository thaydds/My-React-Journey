import React, { Component } from 'react';
import './App.css';
import User from './User'

class UserList extends Component {
    state = {
        playedGames: true
    }

    handleButton = () => {
        this.setState(prevState => ({
            playedGames: !prevState.playedGames,
        }));
      };

    render() {
        const { playedGames } = this.state;
        const { users } = this.props;
        const playedButton = (
          <div>
            <button className="smallButton" onClick={this.handleButton}>
              {playedGames ? 'Hide ' : 'Show '}
              the Number of Games Played
            </button>
          </div>
        );
        return (
            <div>
                 <h2>Users</h2>
                 {users && users.length > 0 ? playedButton : ''}
                <ol>
                   {this.props.users.map( (user, index) => {
                      return <User key={index} userInfo={user} playedGames={this.state.playedGames} />
                   })}
                </ol>
            </div>
        )
    }
}

export default UserList