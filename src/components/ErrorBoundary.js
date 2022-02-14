import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false,
            errorMessage : ''
        }
    }
    

    static getDerivedStateFromError(error){
        console.log(error)
        return{
            hasError: true,
            errorMessage : error
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)

    }
    render() {
        if(this.state.hasError){
            return (
                <div>
                    Something has gone wrong 
                    
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
