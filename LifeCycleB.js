import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
        console.log('LifeCycleB constructor')
        this.state = {
             name: 'Kiran'
        }
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB render
            </div>
        )
    }
}

export default LifeCycleB
