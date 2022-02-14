import React, { Component } from 'react'
import RefsDemo from './RefsDemo'

 class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.ComponentRef = React.createRef()
    }

    FocusChild = () => {
        this.ComponentRef.current.clickHandler()
    }

    render() {
        return (
            <div>
                <RefsDemo ref={this.ComponentRef} />
                <button onClick={this.FocusChild}>Focus</button>
            </div>
        )
    }
}

export default FocusInput
