import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ["Trey", "Lisa", "Travis", "Blake", "Griswold", "maggie", "Chewy", "Rowdy"],
            userInput: '',
            filteredArray: []
        };
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value})
    }

    handleConfirmation = () => {
        const {unfilteredArray, userInput} = this.state;

        this.setState({
            filteredArray: unfilteredArray.filter(e => e.includes(userInput))
        })
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={this.handleInput}/>
                <button className='confirmationButton' onClick={this.handleConfirmation}/>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
