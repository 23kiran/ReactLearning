import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    incrementCount()
    {
        if(this.props.addvalue){
        this.setState((prevState, props) => ({
            count : prevState.count + parseInt(props.addvalue)
        }))
    }else{
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }
    }

    incrementFive()
    {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }
    
    render() {
        return (
            <div> 
                <div>count  - {this.state.count}</div>
<button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
