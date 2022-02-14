import React, { Component } from 'react'
import withCounter from './WithCounter'

 class ClickCounter extends Component {
    render() {
        const {count, countHandler} = this.props
        return (
            <div>
                <button onClick={countHandler}>You Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
