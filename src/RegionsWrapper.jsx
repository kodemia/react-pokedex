import React, { Component } from 'react'

class RegionsWrapper extends Component{
    constructor() {
        super();
        this.state = {
            text:"Adios koders"
        }
    }

    render(){
        return(
            <>
            <h1>{this.state.text}</h1>
            <div className="region-wrapper">
                <div className="btn btn-secondary" data-region-name="Kanto" data-region-url="https://pokeapi.co/api/v2/pokedex/2/" onClick={this.props.handler}>Kanto</div>
                <div className="btn btn-secondary" data-region-name="Johto" onClick={this.props.handler} data-region-url="https://pokeapi.co/api/v2/pokedex/3/">Johto</div>
                <div className="btn btn-secondary" data-region-name="Hoenn" onClick={this.props.handler} data-region-url="https://pokeapi.co/api/v2/pokedex/4/">Hoenn</div>
            </div>
            </>
        )
    }
}

export default RegionsWrapper