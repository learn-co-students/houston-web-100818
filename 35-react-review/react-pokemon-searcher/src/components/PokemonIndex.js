import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search, Header } from "semantic-ui-react";
import _ from "lodash";
const URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonCollection: [],
      filteredPokemon: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(pokemonCollection =>
        this.setState({
          pokemonCollection: pokemonCollection,
          filteredPokemon: pokemonCollection
        })
      )
      .catch(e => console.error(e));
  }

  filterPokemon = value => {
    let holdFilteredPokemon = this.state.pokemonCollection.filter(x =>
      x.name.includes(value)
    );
    this.setState({
      filteredPokemon: holdFilteredPokemon
    });
  };

  render() {
    return (
      <div>
        <Header as="h1">Pokemon Searcher</Header>
        <br />
        <Search
          showNoResults={false}
          onSearchChange={e => this.filterPokemon(e.target.value)}
        />
        <PokemonForm
          // addPokemon={this.addPokemon}
          runFetch={this.props.runFetch}
        />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon} />
        <br />
      </div>
    );
  }
}

export default PokemonPage;

// onSearchChange = {}
