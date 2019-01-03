## Users Favorite Movies

Let's do something a little bit more complicated. Instead of displaying a
list of users and their movies, this time you need to display a list of movies.

For each movie in the list, there are two options:

1. If the movie has been favorited, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has *not* been favorited, display some text stating that no one favorited the movie.

As you go about tackling this project, try to make the app *modular* by breaking it into resusable React components.

### Requirements :wrench:
- Node.js >= v7.0.0
- NPM >= 3.10.8

### How to Run :runner:
- npm install
- npm start

### How i solve it

The output might be like this:
```html
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul>

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>

```
There is so many ways to solve this problem and the way i choose was:

1.Create an array with a list of movies

```javascript
const listMovies = Object.values(movies)
```
2. Create an array with all the movies and the user that favorite them
```javascript
const moviesFav = listMovies.map( movie => {
	return profiles.filter( profile => {
		return movie.id === parseInt(profile.favoriteMovieID)
}).map(profile => { return users[profile.userID]})
})
```
3. Iterate moviesFav list and to an push to a final array an object with FilmName and Users that favorite them
```javascript
const final = []
for (let i =0; i<moviesFav.length; i++){
  const userFav = moviesFav[i].map( movie =>{
    return movie.name})
    final.push({
      'movie': movies[i+1].name,
      'users': userFav
    })
}
```
4. Create a component that represents a MovieCard receiving movieName and users and display it
```javascript
<ul>
          {
            final.map( info => {
                return <MovieCard movie={info.movie} users={info.users} />
            })
          }
        </ul>
```

so, i must to cofess.. maybe this aproach isn't good to solve this problem
