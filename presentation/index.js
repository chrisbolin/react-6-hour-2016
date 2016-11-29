// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "black",
  quartenary: "black"
}, {
  primary: "Lato",
  secondary: "Lato",
  tertiary: "Lato",
  quartenary: "Lato"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={300}>
          <Slide>
            <Heading size={1} lineHeight={1.1} margin={"0 0 1em 0"}>
              Introduction<br/>
              to React
            </Heading>
            <Heading size={4} lineHeight={1.2}>
              GDI Boston<br/>
              December, 2016<br/>
              Chris Bolin @bolinchris
            </Heading>
          </Slide>

          <Slide>
            <Heading lineHeight={2}>Schedule</Heading>
            <List>
              <ListItem>Day 1</ListItem>
              <ListItem>React: The What and Why</ListItem>
              <ListItem>ES6: JavaScript, Revisited</ListItem>
              <ListItem>React 101: Components and JSX</ListItem>
              <ListItem>React 102: Props, State, and Styling</ListItem>
              <ListItem>Day 2</ListItem>
              <ListItem>Exercises</ListItem>
              <ListItem>Tooling</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
