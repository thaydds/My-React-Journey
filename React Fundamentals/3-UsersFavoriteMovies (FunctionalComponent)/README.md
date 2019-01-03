## Users Favorite Movies With Functional Components

At this point, I'm not play with state yet. Functional Components are the best way to represent my components in this exercice.

### Requirements :wrench:
- Node.js >= v7.0.0
- NPM >= 3.10.8

### How to Run :runner:
- npm install
- npm start

### How i solve it

1. App.js
```javascript
const App = () => {
  const moviesList = Object.values(movies)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        <ul>
          {
            final.map( info => {
                return <MovieCard movie={info.movie} users={info.users} />
            })
          }
        </ul>
      </div>
    );
}
```
3. MovieCard.js
```javascript
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
```

