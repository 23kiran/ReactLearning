import React, { Component } from 'react'
import Person from './Person'

class ListMapping extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personlist: [{ id:1,name: 'Bruce', heroname: 'Batman' },
            { id:2,name: 'Clark', heroname: 'Superman' },
            { id:3, name: 'Diana',heroname:'Wonderwoman' }]
        }
    }

    render() {
        const personList = this.state.personlist.map(element => <Person key={element.id} element={element} />)

        return (<ul>
            {
                personList
            }
        </ul>

        )
    }
}

export default ListMapping
