import React, { Component } from 'react';
import './App.css';

class UserCreate extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            userName: '',
            playedGames: 0
        },
        userExists: false
    }

    addUser = (event) => {
        event.preventDefault();
        const isUnique = this.isUnique(this.state.user.userName);
        console.log('isUnique', isUnique.length)
        if(isUnique.length === 0){
            this.props.addUser(this.state.user);
            this.setState(() => ({
                userExists: false
              }));
        }
        else{
            this.setState(() => ({
                userExists: true
              }));
        }
        this.cleanInput();
    }

    isUnique = (userName) => {
        return this.props.users.filter( user => {
            return user.userName === userName;
        })
    }

    cleanInput = () => {
        this.setState({ user: 
            {firstName: '',
            lastName: '',
            userName: ''   
        } 
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(prevState => ({ user: {
            ...prevState.user,
            [name]: value,
        } 
        }));
    }

    isDisabled = () => {
        const { firstName, lastName, userName } = this.state.user;
        return firstName === '' || lastName === '' || userName === '';
      };

    render() {
        const {firstName, lastName, userName} = this.state.user
        return (
            <div>
            <form onSubmit={this.addUser}>
                <div>
                    <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="userName"
                    placeholder="UserName"
                    value={userName}
                    onChange={this.handleChange}
                    />
            </div>
                <button disabled = {this.isDisabled()}>Add</button>
            </form>
            {this.state.userExists ? (
                <p className="error">You cannot add a user that already exists.</p>
                ) : (
                ''
            )}
        </div>
        )
    }

}

export default UserCreate