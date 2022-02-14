import React, { Component } from 'react'

 class ClickCOunterTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount =() => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>CLicked {this.state.count} Times</button>
            </div>
        )
    }
}

export default ClickCOunterTwo
