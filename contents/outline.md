[Demo] - I do, they watch
[Walkthrough] - I do, they follow along
[Exercise] - They do, we help

* What and Why (30 min)
  * You can do this!
  * Very briefly, who I am
    * Work for a React consultancy, 100% of my work is React
  * Who this class is for
    * Experience in JavaScript and HTML
    * React requires a very solid understanding of JavaScript
    * Most of the struggles people have with React are actually struggles with JavaScript
  * What is React?
    * A JS library for building user interfaces
  * React is not a framework
    * Application architecture
    * State store
    * Data fetcher
  * HTML and JavaScript together
    * "one of the most awkward parts about EmberJS is switching back and forth between Handlebars templates and component code."
    * Unifies HTML and JavaScript in JSX [give a quick demo of this right away, don't keep them in suspense]
    * Declarative (not imperative)
  * Who is using it in production?
    * Airbnb
    * Dropbox
    * Uber
    * Twitter
    * Facebook
  * Pros
    * Fast
    * Declarative
    * Integrates HTML into JavaScript
    * Large community
  * Cons
    * JSX - Yet another templating syntax (JSX is required)
    * Tooling - JSX must be transformed into JS
* JavaScript you should know
    * Why do I need this?
      * Most of the struggles people have with React are actually struggles with JavaScript
    * [Walkthrough] http://codepen.io/chrisbolin/pen/ObQaWm
      * CodePen introduction
      * Array.prototype.map()
      * ternary operator
      * && --- shouldShowThing() && thing
      * || --- thingThatMightBeNull || thingDefaultValue
      * `this`
      * .bind()
* ES6 Concepts (30 min)
  * But I thought I was learning React?
    * You need to know ES6 to read React examples
    * You really should use ES6
    * ES6 newest additions to JavaScript (things are only added, not removed)
    * ES6 will make your code way cleaner
    * You already have to transform your JSX, so you can get ES6 for free :)
  * Is this even JavaScript?
  * Cheatsheets - http://ricostacruz.com/cheatsheets/es6, https://github.com/DrkSephy/es6-cheatsheet
  * [Walkthrough] ES5 to ES6 - http://codepen.io/chrisbolin/pen/ZBrvNB/
    * const and let - block scoped - scoped to function PLUS if, for, while, etc  
    * Arrow functions - shorthand (no function), optional implicit return, do not create a new context
    * template strings - `hello there ${chris}`
    * Concise methods - {foo: function(){}} vs. {foo()}
    * Method syntax
    * Destructuring {foo, baz} = bar
    * Spread ... - useful for copying, w or w/o changes
    * Object literal - {x, y} - simply a shorthand
    * Classes - not new functionality, but new simpler syntax    
  * Other things...
  * import - not everything is global anymore!
* [JSX](contents/concepts/jsx.md) (30 mins)
  * If you know HTML, you know JSX: JSX is a SUPERset of HTML
  * JSX is, in practice, absolutely required
  * Example: just html `<h1>Hello, World!</h1>`
  * JavaScript inside JSX
    * JSX can "jump" to JavaScript at any point using {}
    * You can use any JavaScript expression
    * Expressions return a value! Statements do not.
  * [Demo]: `<h1>Hello, {name}!</h1>` http://codepen.io/chrisbolin/pres/jWeGyb
  * [Demo]: `<h1>1 + 1 = {1+1}!</h1>`
  * [Demo]: `<h1>Here is a random number: {Math.random()}!</h1>`
  * What does it DO
    * JSX is an Expression, too
    * React createElement
  * Example: JSX to React.createElement
  * JavaScript is our templating language!
    * No "directives"
    * No "helpers"
    * Just JavaScript: use functions  
  * Special Notes
    * Components can be self-closing <App></App> === <App/>
    * className, not class [we can talk about this later, won't waste time now]
  * React boilerplate. http://codepen.io/chrisbolin/pen/jWeGyb/
    * Let's just work in the the JSX in line 2 for now:
  * [Exercise] render component of DOM elements, no props (basically just the boilerplate). Play with it. Make a div with an h1 in it
  * [Exercise] render component of DOM elements with {JavaScript}  
* [Components](contents/concepts/components.md) (30 mins)
  * A whole new world
    * In React, JS and HTML are kept together, in the same file, in the same code
    * You split out your code into re-useable components
  * Thinking in Components
    * Components are literal "boxes" in your UI
    * Single responsibility - component should do one thing
    * Examples of components: Header, Footer, Search Bar, Modal Window
    * Components nested - they are inside of another component or they have components inside of them
  * Find the components in https://github.com/chrisbolin/GDI-react/blob/master/assets/sample-view.png
  * Find the components in https://facebook.github.io/react/img/blog/thinking-in-react-mock.png
    * Answers https://facebook.github.io/react/img/blog/thinking-in-react-components.png
  * How to think about components
    * A component is basically a *Function that returns UI*
    * The UI is described in JSX (meaning other components, custom and regular html)
  * Re-rendering
    * React knows when to re-render your component
    * Changes to: "inputs" or "state"
  * Two ways: a function and a class
    * "Functional" Component
    * "Class" Component
  * Function
    * The boilerplate shows this
    * Doesn't need to be an arrow function
  * Capitalize Components
    * Components MUST be capitalized App, not app. We'll get to why in a bit
  * [Exercise] Write your own component and render it instead in the boilerplate
  * [Exercise] Render your component INSIDE of <App/>
  * Class
    * Two syntaxes
    * MyComponent = React.createClass({})
    * class MyComponent extends React.Component {}
    * While React.createClass is a little easier to understand, but extending the React.Component class is more common. I'll focus on extending the class.
  * What's the difference
    * The Function is the most basic.
    * use it wherever you can
    * it is must easier to think about and for others to understand
    * use the class when you need the "extras" (just wait for those!)
  * Class Render Function
    * each class must have a render() function
    * think of the render() function of a class as === the Functional component
  * [Exercise] Re-write a functional component in a Class
  * We'll wait for the rest of the Class complexity
* [Props](contents/concepts/props-and-state.md)
  * Props are Parameters
    * Remember that a component is a *Function*
    * The parameters to that function are the props
    * add(1, 3) is similar to <NameCard firstName="Chris" lastName="Bolin"/>
    * the parameters are *named*
  * Props syntax
    * Looks just like HTML element attributes
    * <a id="home" href="/index.html">Home</a>
    * If a string is passed, it looks identical to attributes
  * Anything can be a prop
    * Props can be strings, functions, objects, arrays, React Elements...
    * Remember to use {} to pass non-strings
  * Accessing Props
    * props are always an object
      * <NameCard firstName="Chris" lastName="Bolin"/>
      * { firstName: 'Chris', lastName: 'Bolin' }
    * Functional Components: first and only argument to the function. function (props) { ... }
    * Class Components: this.props
  * [Exercise] Add name prop to Hello
  * *You cannot ever change your props.*
    * This is the fundamental rule of React
    * If you want to communicate back to your parent...
* [Events](contents/concepts/unidirectional-data-flow.md)
  * Events
    * All built-in components have events
    * Very similar to browser events, but events work identically across all browsers (YES)
    * onClick, onMouseEnter, onChange, onKeyDown, ...
    * https://facebook.github.io/react/docs/events.html
  * Callback
    * Each event takes a callback
    * Callback: function that is run when "something" happens
    * [Exercise]: setInterval(callback, 1000);
    * [Exercise]: <Hello/> with onClick
  * Props (data) always goes down
    * Parent passes to props to its children (who might in turn pass on down to its children)
  * How to we get data "up" to the parent?
    * Events and Callbacks
    * Don't be scared    
* [State](contents/concepts/props-and-state.md)
  * What is state?
    * State is data (usually an object)
    * User changes state over time
    * State is the data that describes the status of your application at any given time
  * State: this is when things get real
    * Two two fundamental truths of State
    * 1. State is essential to every real application (but not every "web page")
    * 2. State is where you will find the most bugs in your code; they will also be the hardest to fix bugs
  * React's handling for state is fine for trivial applications
    * Remember, react is a View library
    * State is not its specialty
  * Use something else for bigger apps
    * Redux and MobX are two popular options
  * Use state sparingly:
    * Ideally, only one of your components should have state
      * top-level component
    * Example with bolin.co
      * 50+ props
      * 1 piece of state set in only one place
  * Functional Components Can't Have State
    * This is very handy. Anyone reading your code will know that this Component is state-free and easy to debug
  * Class Components
    * this.state
    * initialize state in constructor()
    * use this.setState() to change state and to trigger a re-render
  * [Exercise] constructor() with this.state. then use that state in render
  * [Exercise] ...then, use this.setState() and onClick={}
* [Exercise: Counter](examples/counter.md) (45 min) (state and events)
  * Key: http://codepen.io/chrisbolin/pen/eBPeYY
* [Exercise: Dynamic Filtering](examples/dynamic-filtering.md) (120 min)
  * Key: http://codepen.io/chrisbolin/pen/oYaoxw
* Styling in React - classes and inline (what are the limitations of classes - why would you want to do this inline)
* props.children (15 mins)
* Tooling (15 min)
* What should you learn next?
  * Lifecycle methods
  * PropTypes (always use these!)
  * State: Redux (or MobX)
  * React is not just for HTML!
    * SVG
    * ReactNative
    * ReactMusic
