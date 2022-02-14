import React from 'react'

function Person({element}) {
    return (
        <li>{element.id}) I am {element.name} a.k.a {element.heroname}</li>
    )
}

export default Person
