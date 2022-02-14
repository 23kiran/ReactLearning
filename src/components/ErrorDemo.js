import React from 'react'

function ErrorDemo({heroName}) {
    if(heroName === 'Joker')
    {
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorDemo
