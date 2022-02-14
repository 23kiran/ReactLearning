import React, { Component } from 'react'
import { UserConsumer } from './components/userContexxt'

 class ConsumerF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username)=> {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }

    getUsername()
    {
        
    }
}

export default ConsumerF
