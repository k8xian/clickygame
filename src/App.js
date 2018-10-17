import React, { Component } from 'react';
import './App.css';
import planets from "./planets.json"
import Game from "./components/Game";
import Card from "./components/Card";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";




class App extends Component {
  state = {
    message: "Click a planet to begin. Don't repeat any planets.   ",
    topScore: 0,
    curScore: 0,
    planets: planets,
    unselectedPlanets: planets
  }

  componentDidMount() {

  }
  // looked up es6 way to shuffle an array on stackoverflow
  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  //swapping variables with decontruction
  randomizeArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectPlanet = name => {
    const findPlanet = this.state.unselectedPlanets.find(character => character.name === name);

    if (findPlanet === undefined) {
      this.setState({
        message: "Click to play again.   ",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        planets: planets,
        unselectedPlanets: planets
      });
    } else {
      const newPlanets = this.state.unselectedPlanets.filter(character => character.name !== name);

      this.setState({
        message: "Well done.   ",
        curScore: this.state.curScore + 1,
        planets: planets,
        unselectedPlanets: newPlanets
      });
    }

    this.randomizeArray(planets);
  };

  render() {
    return (
      <fragment>
        <GlobalStyle />
        <Header
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Game>
          {
            this.state.planets.map(planet => (
              <Card
                name={planet.name}
                image={planet.image}
                selectPlanet={this.selectPlanet}
                curScore={this.state.curScore}
              />
            ))
          }
        </Game>
      </fragment>
    );
  }
}

export default App;