import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        console.log('LifeCycleA constructor')
        this.state = {
             name: 'Kiran'
        }
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
