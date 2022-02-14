import React, { Component } from 'react'

export class FormHandleing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comments: '',
            topic :'react',
            formesubmitted: false
        }
    }

    changeEmailHandler = (emailevent) => {
        console.log(emailevent.target.value)
        this.setState({ email: emailevent.target.value })
    }

    changeCommentsHandler = (emailevent) => {
        console.log(emailevent.target.value)
        this.setState({ comments: emailevent.target.value })
    }

    handleTopicChange = (emailevent) => {
        console.log(emailevent.target.value)
        this.setState({ topic: emailevent.target.value })
    }

    handleSubmit = (emailevent) => {
        console.log(this.state.email)
        console.log(this.state.comments)
        console.log(this.state.topic)
        this.setState({ formesubmitted: true })
        emailevent.preventDefault()       
    }

    render() {
        console.log(this.state.formesubmitted)
        let pagereturnvalue = ''
        if(this.state.formesubmitted)
        pagereturnvalue = <div>Thank you</div>
        else  pagereturnvalue = this.pagereturn()
       return pagereturnvalue
    }

    pagereturn(){
        return (
            <form id={this.props.id} onSubmit={this.handleSubmit}>
                <div>
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.changeEmailHandler} />
                    <label>{this.state.email}</label>
                </div>
                <label>Comments</label>
                <div>
                    <textarea value={this.state.comments} onChange={this.changeCommentsHandler}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormHandleing
