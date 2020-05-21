import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value});
        console.log(this.state.userInput);
    }

    handleSubmit = () => {
        // const [evenArray, oddArray, userInput] = this.state;
        for(let i = 0; i <= this.state.userInput.length; i++) {
            if(isNaN(this.state.userInput[i])){
                this.state.userInput.slice(this.state.userInput[i]);
            }else if(this.state.userInput[i]  % 2 == 0) {
                this.state.evenArray.push(this.state.userInput[i]);
            }else if(this.state.userInput[i] % 2 != 0) {
                this.state.oddArray.push(this.state.userInput[i]);
            }
        }
        this.setState({evenArray: this.state.evenArray.toString()})
        this.setState({oddArray: this.state.oddArray.toString()})
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={this.handleInput}/>
                <button className='confirmationButton' onClick={this.handleSubmit}></button>
                <span className='resultsBox'>Evens:[{this.state.evenArray}]</span>
                <span className='resultsBox'>Odds:[{this.state.oddArray}]</span>
            </div>
        )
    }
}
