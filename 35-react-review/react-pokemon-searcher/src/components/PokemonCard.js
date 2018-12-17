import React from "react";
import { Card, Header } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showFrontOrBack: true
    };
  }

  setImage = () => {
    if (this.state.showFrontOrBack === true) {
      return <img src={this.props.pokemon.sprites.front} alt="oh no!" />;
    } else {
      return <img src={this.props.pokemon.sprites.back} alt="oh no!" />;
    }
  };

  mapOverStat = () => {
    return this.props.pokemon.stats.map(stat => {
      // if (stat.name === "hp") {
      switch (stat.name) {
        case "special-defense":
          return (
            <div>
              {" "}
              Special-Defense <Header as="h4">{stat.value}</Header>
            </div>
          );
          break;
        case "special-attack":
          return (
            <div>
              {" "}
              Special-Attack <Header as="h4">{stat.value}</Header>
            </div>
          );
          break;
        case "defense":
          return (
            <div>
              {" "}
              Defense <Header as="h4">{stat.value}</Header>
            </div>
          );
          break;
        case "attack":
          return (
            <div>
              {" "}
              Attack <Header as="h4">{stat.value}</Header>
            </div>
          );
          break;
        case "speed":
          return (
            <div>
              {" "}
              Speed <Header as="h4">{stat.value}</Header>
            </div>
          );
          break;
        case "hp":
          return (
            <div>
              {" "}
              HP <Header as="h4">{stat.value}</Header>
            </div>
          );
          break;
      }
      return <div> {stat.value}</div>;
      // }
    });
  };
  render() {
    return (
      <Card>
        <div>
          <div
            className="image"
            onClick={() =>
              this.setState({
                showFrontOrBack: !this.state.showFrontOrBack
              })
            }
          >
            {this.setImage()}
          </div>
          <div className="content">
            <div className="header">
              <Header as="h3">{this.props.pokemon.name.toUpperCase()}</Header>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.mapOverStat()}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
