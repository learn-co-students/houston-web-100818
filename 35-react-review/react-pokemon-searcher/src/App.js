import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";
import { Container } from "semantic-ui-react";
const URL = "http://localhost:3000/pokemon";

class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="App">
          <PokemonIndex />;
        </div>
      </Container>
    );
  }
}

export default App;
