import React from "react";
import PokemonCard from "./PokemonCard";
import { Card, Header } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderPocketMonsters = () => {
    let mappedMonsters = this.props.pokemon;
    return mappedMonsters.map(pokemon => {
      return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
    });
  };
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={6}>{this.renderPocketMonsters()}</Card.Group>
      </div>
    );
  }
}

export default PokemonCollection;
