import React, {Component} from 'react'

class ClassComponent extends Component
{
render(){
    return (
    <div><h1>Hello {this.props.name}  a.k.a {this.props.heroname} from class!</h1> 
    {this.props.children}
    </div>)


}
}

export default ClassComponent