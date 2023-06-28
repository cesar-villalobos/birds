import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      birds: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://aves.ninjas.cl/api/birds")
      .then((response) => response.json())
      .then((birds) => this.setState({ birds }));
  }

  render() {
    const { birds, searchField } = this.state;
    const filteredBirds = birds.filter((bird) =>
      bird.name.spanish.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Buscar Pajaritos"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList birds={filteredBirds} />
      </div>
    );
  }
}

export default App;
