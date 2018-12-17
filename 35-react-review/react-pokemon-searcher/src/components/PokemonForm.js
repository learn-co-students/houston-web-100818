import React from "react";
import { Form } from "semantic-ui-react";
const URL = "http://localhost:3000/pokemon";

class PokemonForm extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getInitialState = () => ({ name: "", hp: "", frontUrl: "", backUrl: "" });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, hp, frontUrl, backUrl } = this.state;
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: "hp"
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(resp => resp.json())
      // .then(pokemon => this.props.addPokemon(pokemon))
      .then(() => this.props.runFetch())
      .catch(error => console.error(error));
    this.setState(this.getInitialState());
  };

  render() {
    const { name, hp, frontUrl, backUrl } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={hp}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={frontUrl}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={backUrl}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Button fluid color="red" size="huge">
            Submit
          </Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
