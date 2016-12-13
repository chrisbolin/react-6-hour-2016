<h1 id="banner">Hello {name}!</h1>;

// is transformed to...

React.createElement(
  "h1",
  { id: "banner" },
  "Hello ",
  name,
  "!"
);
