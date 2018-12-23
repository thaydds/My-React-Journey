import React from 'react';
import './App.css';

const User = (props) => {
    console.log("props.user", props.userInfo)
    return (
        <div>
            <li>
                <p>{`Username: ${props.userInfo.userName}`}</p>
                <p>Number of Games Played: {props.playedGames ? props.userInfo.playedGames : '*'}</p>
            </li>
        </div>
    )
}

export default User