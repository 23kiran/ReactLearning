import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            LoggedInMessage: 'Login'
        }
    }

    userLogin()
    {
        if(!this.state.isLoggedIn){
        this.setState({
            isLoggedIn:true,
            LoggedInMessage: 'Log Off'
        })
    }else{
        this.setState({
            isLoggedIn: false,
            LoggedInMessage: 'Login'
        })
    }
    }

    render() {
        var messgae = '';
        if (this.state.isLoggedIn) {
            messgae =
                <div>
                    <div>
                        Welcome Kiran!
                    </div>
                </div>

        }
        else {
            messgae =
                <div>
                    <div>
                        Welcome Guset!
                    </div>
                </div>
        }

        return <div>{messgae}
        <button onClick={()=> this.userLogin()}>{this.state.LoggedInMessage}</button></div>

    }
}

export default UserGreeting
