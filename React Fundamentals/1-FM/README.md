## Users List

Use React and the `profiles`, `users`, and `movies` data in `App.js` to display a list of users alongside their favorite movies.

### Requirements :wrench:
- Node.js >= v7.0.0
- NPM >= 3.10.8

### How to Run :runner:
- npm install
- npm start

### How i solve it
The output of this problem might look like this:
> Jane Cruz's favorite movie is Planet Earth 1.

To solve, I just iterate the profile array using a declarative method from JS called map.

```javascript
{profiles.map(profile => {
    const userName = users[profile.id].name;
		const movieName = movies[profile.favoriteMovieID].name;
		return (
        <li key = {profile.id}>
			 <p>{`${userName}'s favorite movie is ${movieName}.`}</p>
		</li>
        )
        })}
```
