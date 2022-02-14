import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureCom from './PureCom'




export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kiran'
        }
    }
    
    render() {
        console.log('Parent Comp Render')
        return (
            <div>
                <MemoComponent name='Kiran'/>
                <PureCom name='Kiran'/>
            </div>
        )
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Kiran'
            })
        }, 2000);
    }
}

export default ParentComponent
