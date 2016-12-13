

function double (array) {
  let results = []
  for (let i = 0; i < array.length; i++){
    results.push(array[i] * 2)
  }
  return results;
}

function double (array) {
  return array.map(function (item) {return item * 2});
}

// Using jQuery (or vanilla JavaScript), add a click event handler to the element which has an id of “btn”. When clicked, toggle (add or remove) the “highlight” class as well as change the text to “Add Highlight” or “Remove Highlight” depending on the current state of the element.
$("#button").click(function() {
  $(this).toggleClass("highlight");

  if ($(this).text() === 'Add Highlight') {
    $(this).text('Remove Highlight')
  } else {
    $(this).text('Add Highlight')
  }
})

<Button
  onToggleHighlight={this.handleToggle}
  highlight={this.state.highlight}
>
  {this.state.buttonText}
</Button>

// adapted from Tyler McGinnis
// https://medium.freecodecamp.com/imperative-vs-declarative-programming-283e96bf8aea#.5ylgten4h

Components

<div>
  <Header />
  <Menu />
  <ContentBox />
</div>

<div>
  <SearchBar />
  <ProductTable/>
</div>


React.createElement

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);



// first this.state

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <h1>
        {this.state.selected ? '[X]' : ''}
        Hello World
      </h1>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

// first setState

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected() {
    this.setState({
      selected: !this.state.selected,
    });
  }

  render() {
    return (
      <h1 onClick={this.toggleSelected.bind(this)}>
        {this.state.selected ? '[X]' : ''}
        Hello World
      </h1>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
