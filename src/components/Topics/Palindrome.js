import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value});
    }

    handleConfirmation = () => {
        const forward = this.state.userInput;
        const backward = this.state.userInput.split('').reverse().join('');
        console.log(backward);

        if(forward === backward) {
            this.setState({palindrome: 'true'})
        } else this.setState({palindrome: 'false'})
    }

    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={this.handleInput}/>
                <button className='confirmationButton' onClick={this.handleConfirmation}/>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
