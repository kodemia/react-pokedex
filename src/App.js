import React, { Component } from 'react';
import logo from './assets/pokemon-logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import RegionsWrapper from './RegionsWrapper'
import PokemonsWrapper from './PokemonsWrapper'

class App extends Component{
  constructor() {
    super();
    this.state = {
        regionDex:[]
    }
  }

  clickHandler = (event) => {
      this.setState({text: event.target.getAttribute('data-region-name')})
      console.log(event.target.getAttribute('data-region-name'))
      this.getRegionData(event.target.getAttribute('data-region-url'))
  }

  pokemonButtonHandler = (event) => {
    this.getPokemonByUrl(event.target.getAttribute('data-poke-url'))
  }

  async getRegionData(regionUrl){
      const response = await fetch(regionUrl);
      console.log(response)
      const jsonBody = await response.json();
      console.log(jsonBody)
      this.setState({regionDex:jsonBody.pokemon_entries})
  }

  async getPokemonByUrl(pokeUrl){
    const response = await fetch(pokeUrl);
    console.log(response)
    const jsonBody = await response.json();
    console.log(jsonBody)
    this.setState({selectedPokemon:jsonBody})
  }

  render(){
    return (
      <>
        <img className="w-50 mx-auto d-block" src={logo} alt="" />
        <RegionsWrapper 
          handler = {this.clickHandler}
        />
        <div className="container">
          <div className="row">
            <div className="col-8 border border-danger">
              <h2>Lista de pokemons de {this.state.text}</h2>
              <div className="row">
                {
                  this.state.regionDex.length != 0 ? this.state.regionDex.map((pokemon, index) => {return <PokemonsWrapper pokeName = {pokemon.pokemon_species.name} pokeUrl={pokemon.pokemon_species.url} handler={this.pokemonButtonHandler} key={index}/>}) : null
                }
              </div>
            </div>
            {
              this.state.selectedPokemon ? <div className="col-4">
              <h2>Detalles</h2>
              <div className="card" >
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.selectedPokemon.id}.png`}className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{this.state.selectedPokemon.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">ID: {this.state.selectedPokemon.id}</li>
                  <li className="list-group-item">Felicidad Base: {this.state.selectedPokemon.base_happiness}</li>
                  <li className="list-group-item">Grado de captura: {this.state.selectedPokemon.capture_rate}</li>
                </ul>
              </div>
            </div> : null
            }
            
          </div>
        </div>
      </>
    );
  }
}

export default App;
