import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setcbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    clickHandler()
    {
        if (this.cbRef) {
            console.log(this.cbRef.value)
        }
        if (this.cbRef) {
            this.cbRef.focus()
        }
        
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} ></input>
                <button onClick={() => this.clickHandler()}>Click</button>
                <input type='text' ref={this.setcbRef}></input>
            </div>
        )
    }
}

export default RefsDemo
