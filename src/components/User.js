import React, { Component } from 'react'
import ConsumerF from './ConsumerF'

 class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
                <ConsumerF/>
            </div>
        )
    }
}

export default User
