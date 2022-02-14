import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParentInput extends Component {
     constructor(props) {
         super(props)
     
         this.InputRef = React.createRef()
     }

     clickHandler = () =>{
         this.InputRef.current.focus()
     }
     
    render() {
        return (
            <div>
                <FRInput ref={this.InputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
