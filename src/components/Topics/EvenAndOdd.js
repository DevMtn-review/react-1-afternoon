import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4 className=''></h4>
                <input className='inputLine'/>
                <button className='confirmationButton'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
        )
    }
}
