# My-React-Journey

So.. this is how my journey began to learn react.
Let's go!

## Step 1 React Fundamentals :runner:

Just like my mummy always say: 'we have to start from the beginning' and that's how I start.
before to start to code, I decide do go deep about the core concepts about React.js and
why ???

Tyler mcginnis tells four reasons why we should use react and they are:

### 1. Compositional model
   Composition occurrs when we join simple functions to contruct another function more complex. We can think a simple function as a role that does one thing and that's what React does when we build a page combining various functions.
   
### 2. Declarative nature
   To talk about the advantage of the declarative nature, we first have undestand what imparetive nature would be. In a simple way, we can say that the imperature nature is when we need to solve a problem and we need to say how to solve it (step-by-step) to get the result and the declarative nature is when we just need what we want e let the responsability to discover the way to get this with the tool, in this case, with React.
   
### 3. The way data flows through a Component
   <img src="https://i.imgur.com/bLKFqdd.png" />
   This previous image says that the data flows unidirectional in the react ecosystem from the parent to children. It's so          helpful to not get lost about the data uptdate in your app.
    
### 4. It's just JAVASCRIPT!!
   Learning react isn't just about learn a library to build something, learning react is about improve your skills with javascript and becoming prepared for incoming changes of the language.
   
Now we already know why use React, so it's important to talk about some fundamentals concepts that envolve this library:

**UI render**:
React uses JS objects to create an UI. We just have to describe the element that we want e let de responsability of     manipulating the DOM with React.

**JSX**:
It's a extension of JS language that joins HTML and JS.

**Props**:
This is how we call the way to pass values from a component to another one.

**State**:
Is the place where we can store the behavior (state) of the aplication and we can use this for update the UI when is required.
**Stateless Components or Functional Components**:
When the component doesn't have an internal state, but rather its role is just to render something, we call this stateless component
**Controlled Components**
We use this term to refer a component that represents a form and your behavior depends of the internal state in this component and not inside the DOM.

...It's enough of talking?.
let me show some exercices that i use to wrap my head around these concepts.

* [Hello React World](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/1-FM)
* [UsersFavoriteMovies](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/2-UsersFavoriteMovies)
* [UsersFavoriteMovies (FunctionalComponent)](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/3-UsersFavoriteMovies (FunctionalComponent))
* [Math Game](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/4-MathGame)
* [Input Mirror](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/5-InputMirror)
* [Shopṕing APP](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/6-ShoppingApp)
* [CreateUser APP](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/7-CreaterUserApp)
* [Chat APP](https://github.com/thaydds/My-React-Journey/tree/master/React%20Fundamentals/8-ChatApp)

### React Component Life-Cycle

It's essencial knows react component life-cycle to use that 'tricks' to make ajax requisition, update state and more.
<img src="https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abae243_nd019-c1-l4-lifecycle-events/nd019-c1-l4-lifecycle-events.png" />

there is so many events but we can separate in three category:

### 1.Adding to DOM
* constructor()
* componentWillMount()
* render()
* componentDidMount()

### 2.Render the DOM AGAIN
* componentWillReceiveProps()
* shouldComponentUpdate()
* render()
* componentDidUpdate()

### 3.Remove From DOM
* componentWillUnmount()

### React Router

The React Router turns React projects into single-page applications and does this by providing some specialized components that manage link building and application URLs, provide transitions between different URLs, and more.

so.. lets talk about some components

### BrowserRouter
 We need to envolve our app into this component to react router works fine. It provides too a history to manage the URL changes.
 
### Link
 Works similar to the HTML tag <a>
   
   ```javascript
   <Link to="/about">About</Link>
   ```
### Router
 The component whos' decide what component will be render according the URL path


