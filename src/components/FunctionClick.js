import React, { Component } from 'react'
import ChildClick from './ChildClick'

class FunctionClick extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildClick greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default FunctionClick
