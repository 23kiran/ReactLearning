import React, { Component } from 'react'
import Message from './Message'
import ModalDemo from './ModalDemo'

 class ModalDemoParent extends Component {
    state = {showModal: false}
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: 'relative',
          }}
        >
          <h1>My App</h1>
          <p>
            This is an example of how you might use React.createPortal. I think
            it is a pretty neat API that is yet another awesome escape hatch
            that React provides for practical reasons. Sometimes you just need
            to render something completely outside the React Tree.
          </p>
          <button onClick={this.handleShowMessageClick}>
            Show Secret Modal
          </button>
          {this.state.showModal ? (
            <ModalDemo onClose={this.handleCloseModal}>
              <Message/>
            </ModalDemo>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ModalDemoParent
