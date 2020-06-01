import React, { Component } from 'react'

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleConfirmation = () => {
        this.setState({sum: +this.state.number1 + +this.state.number2});
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className='inputLine' name='number1' onChange={this.handleInput}/>
                <input className='inputLine' name='number2' onChange={this.handleInput}/>
                <button className='confirmationButton' onClick={this.handleConfirmation}/>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}
