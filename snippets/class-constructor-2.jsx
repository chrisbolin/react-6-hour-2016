class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "World"
    };
  }
  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}
