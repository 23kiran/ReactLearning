import React from 'react'

function ChildClick(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet parent</button>
        </div>
    )
}

export default ChildClick
