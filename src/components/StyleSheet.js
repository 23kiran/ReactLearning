import React from 'react'
import './MyStyles.css'
import MMyStyles from './MMyStyles.module.css'

function StyleSheet(props) {
    let className = `${props.primary ? 'primary': ''} ${props.fontXL ? 'font-XL': ''} `
    return (
        <div>
            <h1 className={className}>Style sheets</h1>
            <h1 className={MMyStyles.Success}>Style sheets</h1>
        </div>
    )
}

export default StyleSheet
