import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    nome: "Rômulo",
    idade: 29,
    comida: "churrasco",

    musicas: ["blind", "Control", "Plastic love"]
  };

  render() {
    return (
      <section>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>

        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
      </section>
    );
  }
}

export default App;
