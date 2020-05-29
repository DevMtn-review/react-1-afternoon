import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{"name": "Trey", "giant head": false}, {"name": "Lisa", "giant head": false}, {"name": "Travis", "giant head": true}, {"name": "Blake", "giant head": true}],
            userInput: '',
            filteredArray: []
        };
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value});
    }

    handleConfirmation = () => {
        const {unFilteredArray, userInput} = this.state;
        let newArray = unFilteredArray.filter(e => e[userInput] === true)
        this.setState({filteredArray: newArray})
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.handleInput}/>
                <button className='confirmationButton' onClick={this.handleConfirmation}></button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
