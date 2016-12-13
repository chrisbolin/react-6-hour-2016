function Welcome(inputs) {
  return (
    <h1>Hello {inputs.name}!</h1>
  );
}

ReactDOM.render(
  <Welcome name="Class"/>,
  document.getElementById('app')
);
