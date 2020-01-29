import React, { Component } from 'react'

class PokemonsWrapper extends Component{
    render(){
        return(
            <div className="col-4">
                <div className="btn btn-dark btn-block mb-3 text-capitalize" data-poke-url={this.props.pokeUrl} onClick={this.props.handler}>{this.props.pokeName}</div>
            </div>
        )
    }
}

export default PokemonsWrapper