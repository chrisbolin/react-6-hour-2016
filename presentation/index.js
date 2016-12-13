// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading as HeadingBase,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Counter from "../assets/counter";
import ProductTable from "../assets/productTable";

// Require CSS
require("normalize.css");
require("./style.css");


const images = {
  logo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "black",
  quartenary: "#2d2d2d"
}, {
  primary: "Source Sans Pro",
  secondary: "Source Sans Pro",
  tertiary: "Source Sans Pro",
  quartenary: "Source Sans Pro"
});

const Heading = ({children, ...props}) => (
  <HeadingBase {...props}>
    <span className={(props.size === 1) && "highlight"}>
      {children}
    </span>
  </HeadingBase>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={300} progress="bar" controls>
          <Slide>
            <Heading size={1}>
              Introduction<br/>
              to React
            </Heading>
            <Heading size={3} lineHeight={1.2}>
              gdi boston<br/>
              December, 2016<br/>
              Chris Bolin @bolinchris<br/>
              <br/>
              bit.ly/react-2016
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              <Link href="#/67">Day Two: Start Here</Link>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Hi, I'm Chris
            </Heading>
            <Text>
              I work for a React consultancy. <br/>
              And I really like teaching.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              What is this<br/>going to be like?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Intro to React<br/>
              ...but not JavaScript
            </Heading>
            <Text>React requires a solid understanding of JavaScript.</Text>
            <Text>Many struggles people have learning React are actually struggles with JavaScript.</Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Something for Everyone
            </Heading>
            <Text>You have to see something more than once to learn it.</Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Why did you take this class?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Q: What is React?
            </Heading>
            <Heading size={2}>
              A: a JavaScript library for building user interfaces.
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              React is not a framework
            </Heading>
            <Text>No application architecture</Text>
            <Text>No state store</Text>
            <Text>No data fetcher</Text>
            <Text>Just the UI</Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              React unifies HTML and JavaScript
            </Heading>
          </Slide>

          <Slide>
            <Text textAlign="left">"One of the most awkward parts about EmberJS is switching back and forth between Handlebars templates and component code."</Text>
            <Text textAlign="right">- M. Jackson (Twitter, Path)</Text>
          </Slide>

          <Slide textAlign="left">
            <Heading size={2}>
              React unifies HTML and JavaScript with JSX
            </Heading>
            <Text textAlign="left">
              Ember, Angular, Backbone, Vue <br/>
              <Code>home.js, home.html</Code> <br/>
              <Code>navigation.js, navigation.html</Code>
            </Text>
            <Text textAlign="right">
              React <br/>
              <Code>home.jsx</Code> <br/>
              <Code>navigation.jsx</Code>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              JSX: HTML syntax inside of JavaScript
            </Heading>
          </Slide>

          <Slide>
            <Text>
              but what does JSX look like?
            </Text>
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/jsx-first-look.jsx")}
              margin="20px auto"
              textSize="1.8rem"
            />
            <Heading size={3}>
              Hello Class!
            </Heading>
          </Slide>


          <Slide>
            <Heading size={2}>
              React is Declarative,<br/>
              not Imperative
            </Heading>
            <Text textAlign="left">
              <b>Declarative:</b> describe the outcome you want.
              <br/>
              <b>Imperative:</b> state the steps to achieve that outcome.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Declarative vs. Imperative
            </Heading>
            <Text textAlign="left">
              <b>Declarative:</b> render this div with this style when this data changes.
              <br/>
              <br/>
              <b>Imperative:</b> wait for the data to change; create a div; set the div contents; set the div style; make it visible.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2} textAlign="left">
              React is used in production by Twitter, Netflix, Uber, Airbnb, Dropbox, Facebook.
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Fast<br/>
              Declarative<br/>
              Widely adopted<br/>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Biggest barriers
            </Heading>
            <Text>
              JSX: Learn this (slightly) new syntax<br/>
              Tooling: JSX has to be transformed into JS<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>JavaScript Refresher</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Many struggles people have with React are actually struggles with JavaScript.
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/ObQaWm" target="_blank">
                JavaScript Refresher
              </a>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1}>ES6: New JavaScript Features</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>ES6: New JavaScript Features</Heading>
            <Text textAlign="left">
              ES6 adds new standards to the JavaScript (ECMAScript) language.<br/>
              ES6 === ES2015 (sorry)<br/>
              Revisions are now planned yearly: ES2015, ES2016...<br/>
              Features are only added; nothing is removed<br/>
              "Current" JavaScript is ES5
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>But I thought I was learning React?</Heading>
            <Text textAlign="left">
              <b>You need to know ES6 to read React examples.</b><br/>
              ES6 makes your life easier.<br/>
              ES6 will make your code way cleaner.<br/>
              You get ES6 "for free" with JSX.<br/>
              ES6 browser support is growing regularly.<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>Is this even JavaScript?</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/confusing-es6.jsx")}
              margin="20px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>Helpful Resources</Heading>
            <Text textAlign="left">
              <a href="http://ricostacruz.com/cheatsheets/es6" target="_blank">
                Rico Sta. Cruz ES6 Cheatsheet
              </a>
              <br/>
              <br/>
              <a href="https://github.com/DrkSephy/es6-cheatsheet" target="_blank">
                DrkSephy ES6 Cheatsheet
              </a>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/ZBrvNB" target="_blank">
                Convert ES5 to ES6
              </a>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>ES6 Imports</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/es6-import.jsx")}
              margin="20px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={1}>JSX</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>JSX is a superset of HTML</Heading>
            <Text textAlign="left">
              If you know HTML, you know most of JSX
            </Text>
            <CodePane
              lang="jsx"
              source={"<h1>Hello, World!</h1>"}
              margin="20px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>JSX is required</Heading>
            <Text>
              For 99%+ of React applications, you need it.
              <br/>
              Just accept that.
              <br/>
              <br/>
              (Remember: JSX is one of React's best features)
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>JavaScript inside of JSX</Heading>
            <Text>
              JSX can "jump" to JavaScript at any point using <Code>{'{}'}</Code><br/>
              You can use any JavaScript <b>expression</b> <br/>
              Expressions produce a value; statements do not. <br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>Expressions</Heading>
            <Text>Expressions produce a value</Text>
            <Text>You can use these inside of JSX <Code>{'{}'}</Code></Text>
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/expressions.jsx")}
              margin="20px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>Statements</Heading>
            <Text textAlign="left">
              Statements don't produce a single value<br/>
              You can't use these inside of JSX with <Code>{'{}'}</Code><br/>
              If you need one, just wrap it in a function!<br/>
              (calling a function is an expression)
            </Text>
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/statements.jsx")}
              margin="20px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                Playing with JSX
              </a>
            </Heading>
            <Text>Use strings, equations, and functions inside of JSX.</Text>
            <Text>JSX elements can be nested, just like HTML.</Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              But what does it DO?
            </Heading>
            <Text>
              JSX is transformed into <Code>React.createElement</Code> calls
              for each <Code>{'<el>...</el>'}</Code>
            </Text>
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/jsx-to-js-1.jsx")}
              textSize="1.8rem"
            />
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/jsx-to-js-2.jsx")}
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={3}>
              ...but please don't worry about it right now.
              <br/><br/>
              <b>
                CodePen will transform JSX for us.
              </b>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              JavaScript is our templating language
            </Heading>
            <Text textAlign="left">
              JSX is JavaScript, so we don't need template helpers<br/>
              Repeating, Looping: Array.map()<br/>
              Conditionals: ternary (?), AND (&&)<br/>
              Custom formatting/logic: functions!
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Special Notes
            </Heading>
            <Text textAlign="left">
              CSS classes are applied with <br/>
              <Code>className</Code>
              {' not '}
              <Code>class</Code>
              <br/><br/>
              Any JSX element can be self-closing:
              <br/>
              <Code>
                {'<input></input> === <input/>'}
              </Code>
              <br/><br/>
              To render nothing, just return <Code>false</Code>.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text>Use a ternary (?) in JSX.</Text>
            <Text>Use an AND (&&) in JSX.</Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              Components
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Thinking in Components
            </Heading>
            <Text>
              "Boxes" containing UI elements<br/>
              Single responsibility: should do justin one thing<br/>
              Examples: Header, Footer, Search Bar, Modal Window<br/>
              Nested: usually have parents, children, or both<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Find The Components
            </Heading>
            <Heading size={3} textAlign="left">
              This slide is written in React (really!). What do you think the components are?
            </Heading>
            <Text textAlign="right">
              How about on <a href="http://www.nytimes.com" target="_blank">The New York Times</a>?
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Components are Functions
            </Heading>
            <Text>
              <b>Just functions that return UI.</b><br/>
              That UI is described in JSX<br/>
              (regular HTML elements and other components)
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Re-rendering
            </Heading>
            <Text>
              React knows when to re-render your components.<br/>
              Re-renders on changes to <b>inputs</b> or <b>internal state</b>.
            </Text>
          </Slide>

          <Slide>
            <Heading size={3} textAlign="left">
              Two flavors of React components...
            </Heading>
            <Heading size={2} textAlign="left">
              Functional
              <br/>
              <br/>
              Class
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} textAlign="left">
              Functional: Simple
              <br/><br/>
              Class: Advanced
            </Heading>
            <Text textAlign="left">
              Use functional components wherever possible.<br/>
              Only use class components when you need them*.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Functional Components
            </Heading>
            <Text>
              Literally a function that returns JSX.<br/>
            </Text>
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/functional-components.jsx")}
              textSize="2.2rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Capitalize your Component Names
            </Heading>
            <Text>
              Component names must be <b>Capitalized</b>.<br/>
              (That way React can tell them apart from HTML/HTML5/SVG/XML...)
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text>
              Make your own functional components.<br/>
              Try placing a component inside of another.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Class Components
            </Heading>
            <Text textAlign="left">
              Basically an object with special methods.<br/>
              Has its own internal "state".<br/>
              Two different ways to make a class component...<br/>
            </Text>
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/class-components.jsx")}
              textSize="2.2rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Class render()
            </Heading>
            <Text textAlign="left">
              Every class component must have a render method.<br/>
              render() is equivalent to a functional component.
            </Text>
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/class-render.jsx")}
              textSize="2.5rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text>
              Convert functional component to class.
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              Props
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Props
            </Heading>
            <Text textAlign="left">
              "Props" are the inputs to a component<br/>
              They're analogous to attributes in HTML.<br/>
            </Text>
            <CodePane
              lang="jsx"
              source={`<a id="home" href="/index.html">Home</a>
              \n<NameCard first="Chris"/>`}
              margin="20px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Component = Function<br/>
              Props = Inputs
            </Heading>
            <Text>
              All props are named; they are stored in an object.<br/>
            </Text>
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/props-inputs.jsx")}
              margin="10px auto"
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Anything can be a prop
            </Heading>
            <Text textAlign="left">
              <b>Strings, Booleans, Numbers,<br/>
              Objects, Arrays, Functions...</b>
              <br/>
              <br/>
              Remember to use <Code>{`{}`}</Code> to place JS into JSX
              <br/>
              <br/>
              Shorthands:<br/>
              Strings can be passed with quotes.<br/>
              True booleans can be passed with just a name.<br/>
            </Text>
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/props-demo.jsx")}
              textSize="1.7rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Accessing props
            </Heading>
            <Text textAlign="left">
              <b>Functional:</b> first and only input<br/>
              <b>Class:</b> <Code>this.props</Code>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text>
              Add props to a component.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              You cannot ever <br/> change your own props
            </Heading>
            <Text>
              This is the fundumental rule of React.
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              Day 1 Review
            </Heading>
            <Text>
              ES6<br/>
              JSX<br/>
              Components<br/>
              Functional & Class<br/>
              Props<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              Events
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Events: <br/>
              respond + interact
            </Heading>
            <Text textAlign="left">
              All built-in HTML elements in React have events.<br/>
              Very similar to browser events, <br/>
              but work identically across all browsers!<br/>
              <Code>onClick, onMouseEnter, onChange, onKeyDown...</Code><br/>
              <br/>
            </Text>
            <Text textAlign="right">
              <a href="https://facebook.github.io/react/docs/events.html" target="_blank">
                Docs: All React Events
              </a>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Callbacks
            </Heading>
            <Text textAlign="left">
              Each event takes a function, or callback.<br/>
              The callback is run when the event happens.<br/>
              Children can run these "callbacks".
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text>
              Use <Code>onClick</Code> and <Code>onMouseEnter</Code><br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              State
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              What is State?
            </Heading>
            <Text textAlign="left">
              State is data (usually an object).<br/>
              A user changes the state over time.
              <br/>
              <br/>
              <b>State is the data that describes the status of your application at any given time.</b>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Examples of State
            </Heading>
            <Text>
              Is the menu visable?<br/>
              What's the user's name?<br/>
              What page are we on?<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Two Rules of State
            </Heading>
            <Text textAlign="left">
              State is essential to every real application.<br/>
              State is where you will find the most bugs in your code.<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              React's State Handling
            </Heading>
            <Text textAlign="left">
              React's handling for state is fine for trivial applications.
              <br/>
              <br/>
              Remember, React is a View library:<br/>
              State is not it's specialty.
              <br/>
              <br/>
              Use a state library, like Redux and MobX, for real applications.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Use State Sparingly
            </Heading>
            <Text textAlign="left">
              Less state → Easier to debug.<br/>
              Very few components should need to hold state.<br/>
              Mutiple things can be derived from one piece of state.<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Functional Components<br/>
              can't have state
            </Heading>
            <Text textAlign="left">
              They just take in thier props and use them to render.<br/>
              No state → easier to understand.<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Class Components<br/>
              can have state
            </Heading>
            <Text textAlign="left">
              Stored in <Code>this.state</Code>.<br/>
              Changed with <Code>this.setState()</Code>.<br/>
              setState merges state data.<br/>
              Initialized in the constructor method.
            </Text>
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/class-constructor-1.jsx")}
              textSize="1.8rem"
            />
          </Slide>

          <Slide bgColor="quartenary">
            <CodePane
              lang="jsx"
              source={require("raw!../snippets/class-constructor-2.jsx")}
              textSize="1.8rem"
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Callback Context
            </Heading>
            <Text textAlign="left">
              By default, callbacks are run with no context.<br/>
              If you need to access the Component's context, like <Code>this.something</Code>,
              in a callback make sure you bind it...<br/>
              <Code>myCallback.bind(this)</Code>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text>
              Make a Class component.<br/>
              Initialize its state.<br/>
              Change the state on click.<br/>
              Move the event handling to a separate method.<br/>
              Hint: you mind need bind
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Data down,<br/>Events up
            </Heading>
            <Text textAlign="left">
              Parents send data to child components via props.<br/>
              Parents can also send functions to children.<br/>
              Children can run these "callbacks".
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                React Boilerplate
              </a>
            </Heading>
            <Text textAlign="left">
              Make a Class component with state.<br/>
              Make a Functional component with an event.<br/>
              Use the Functional component in the Class.<br/>
              Send events from the Function to change the Class's state.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/jWeGyb" target="_blank">
                Exercise: Counter
              </a>
            </Heading>
            <Text textAlign="left">
              Build a counter.<br/>
              • A heading that displays current count.<br/>
              • An increment button.<br/>
              • A decrement button.
            </Text>
            <Counter/>
          </Slide>

          <Slide align="flex-start flex-start">
            <Heading size={2}>
              → <a href="http://codepen.io/chrisbolin/pen/rWZgGE" target="_blank">
                Exercise: Filtering
              </a>
            </Heading>
            <ProductTable/>
          </Slide>

          <Slide>
            <Heading size={2}>
                Components
            </Heading>
            <Text>
              How would you divide up the problem?
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
                State
            </Heading>
            <Text>
              What state do we need?<br/>
              Which components need state?
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
                Static List
            </Heading>
            <Text>
              Products, thier prices, and thier availability.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
                Availability toggle
            </Heading>
            <Text>
              Toggle to show or hide out-of-stock products.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
                Filter box
            </Heading>
            <Text>
              Filter as you type.
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              React Miscellany
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2}>
              Styling
            </Heading>
            <Text>
              CSS Classes<br/>
              Inline styles<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Children
            </Heading>
            <Text>
              Any component can be a container.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Tooling
            </Heading>
            <Text>
              react-create-app<br/>
              Babel<br/>
              Webpack<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              State
            </Heading>
            <Text>
              Redux<br/>
              MobX<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Lifecycle Methods
            </Heading>
            <Text>
              Component Should Update<br/>
              Component Did Mount<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              PropTypes
            </Heading>
            <Text>
              Check the type of component props<br/>
              Highly recommended!<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Debugging
            </Heading>
            <Text>
              Chrome inspector
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              React isn't just for HTML
            </Heading>
            <Text>
              SVG<br/>
              React Canvas<br/>
              iOS and Android (React Native)<br/>
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              Introduction<br/>
              to React
            </Heading>
            <Heading size={3} lineHeight={1.2}>
              Chris Bolin
              <br/>
              <br/>
              @bolinchris | bolin.chris@gmail.com
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
